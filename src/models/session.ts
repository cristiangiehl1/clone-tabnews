import database from "@/infra/database";
import crypto from "node:crypto";
import type { Session } from "./entities/session";

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
  const expiresAt = new Date(Date.now() + EXPIRATION_IN_MILLISECONDS);

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

const sessions = {
  create,
  EXPIRATION_IN_MILLISECONDS,
};

export default sessions;
