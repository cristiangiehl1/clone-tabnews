import database from "@/infra/database";
import crypto from "node:crypto";
import type { Session } from "./entities/session";
import { UnauthorizedError } from "@/infra/errors";

export interface CreateSessionParams {
  userId: string;
  token: string;
  expiresAt: Date;
}

export interface UpdateUserParams {
  email?: string;
  username?: string;
  password?: string;
}

const EXPIRATION_IN_MILLISECONDS = 60 * 60 * 24 * 30 * 1000; // 30 dias

async function create({ userId }: { userId: string }): Promise<Session> {
  const token = crypto.randomBytes(48).toString("hex");
  const expiresAt = getExpirationDate();

  const newSession = await runInsertQuery({ userId, token, expiresAt });

  return newSession;

  async function runInsertQuery({
    userId,
    token,
    expiresAt,
  }: CreateSessionParams) {
    const result = await database.query({
      text: `
      INSERT INTO 
        sessions 
          (user_id, token, expires_at) 
        VALUES 
          ($1, $2, $3)
        RETURNING
          *
      ;`,
      values: [userId, token, expiresAt],
    });

    return result.rows[0];
  }
}

async function findOneValidByToken(token: string): Promise<Session> {
  const sessionFound = await runSelectQuery(token);

  return sessionFound;

  async function runSelectQuery(token: string) {
    const result = await database.query({
      text: `
        SELECT 
          * 
        FROM
          sessions
        WHERE
          token = $1
          AND
          expires_at > NOW()
        LIMIT
          1
      `,
      values: [token],
    });

    if (result.rows.length === 0) {
      throw new UnauthorizedError({
        message: "Usuario nao possui sessao ativa.",
        action: "Verifique se este usuario esta logado e tente novamente.",
      });
    }

    return result.rows[0];
  }
}

async function renew(id: string) {
  const expiresAt = getExpirationDate();

  return await runUpdateQuery({ id, expiresAt });

  async function runUpdateQuery({
    expiresAt,
    id,
  }: {
    id: string;
    expiresAt: Date;
  }) {
    const results = await database.query({
      text: `
        UPDATE
          sessions
        SET
          expires_at = $2,
          updated_at = NOW()
        WHERE
          id = $1
        RETURNING
          *
      ;`,
      values: [id, expiresAt],
    });

    return results.rows[0];
  }
}

function getExpirationDate(): Date {
  return new Date(Date.now() + EXPIRATION_IN_MILLISECONDS);
}

const session = {
  create,
  findOneValidByToken,
  renew,
  EXPIRATION_IN_MILLISECONDS,
};

export default session;
