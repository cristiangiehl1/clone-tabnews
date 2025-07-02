import database from "@/infra/database";
import { NotFoundError, ValidationError } from "@/infra/errors";
import passwordModel from "./password";
import type { User } from "./entities/users";

export interface CreateUserParams {
  username: string;
  email: string;
  password: string;
}

export interface UpdateUserParams {
  email?: string;
  username?: string;
  password?: string;
}

async function create({ email, password, username }: CreateUserParams) {
  await validateUniqueUsername(username);
  await validateUniqueEmail(email);
  const hashedPassword = await hashPassword(password);
  const newUser = await runInsertQuery({
    email,
    password: hashedPassword,
    username,
  });
  return newUser;

  async function runInsertQuery({
    email,
    password,
    username,
  }: CreateUserParams) {
    const result = await database.query({
      text: `
      INSERT INTO 
        users 
          (username, email, password) 
        VALUES 
          ($1, LOWER($2), $3)
        RETURNING
          *
      ;`,
      values: [username, email, password],
    });

    return result.rows[0];
  }
}

async function findOneByUsername(username: string): Promise<User> {
  const userFound = await runSelectQuery(username);
  return userFound;

  async function runSelectQuery(username: string) {
    const result = await database.query({
      text: `
      SELECT 
        *  
      FROM
        users
      WHERE
        LOWER(username) = LOWER($1)
      LIMIT 
        1
      ;`,
      values: [username],
    });

    if (result.rows.length === 0) {
      throw new NotFoundError({
        message: "O username informado nao foi encontrado no sistema.",
        action: "Verifique se o username esta digitado corretamente",
      });
    }

    return result.rows[0];
  }
}

async function update({
  username,
  params,
}: {
  username: string;
  params: UpdateUserParams;
}) {
  const currentUser = await findOneByUsername(username);

  if (params.username) {
    await validateUniqueUsername(params.username);
  }

  if (params.email) {
    await validateUniqueEmail(params.email);
  }

  if (params.password) {
    params.password = await hashPassword(params.password);
  }

  const userWithNewValeus = { ...currentUser, ...params };

  return await runUpdateQuery(userWithNewValeus);

  async function runUpdateQuery({ id, email, password, username }: User) {
    const results = await database.query({
      text: `
        UPDATE
          users
        SET
          username = $2,
          email = $3,
          password = $4,
          updated_at = timezone('utc', now())
        WHERE 
          id = $1
        RETURNING
          *
      `,
      values: [id, username, email, password],
    });

    return results.rows[0];
  }
}

async function validateUniqueEmail(email: string) {
  const result = await database.query({
    text: `
        SELECT 
          email
        FROM
          users
        WHERE
          LOWER(email) = LOWER($1) 
      `,
    values: [email],
  });

  if (result.rows.length > 0) {
    throw new ValidationError({
      message: "O email informado ja esta sendo utilizado.",
      action: "Utilize outro email para realizar essa operação.",
    });
  }
}

async function validateUniqueUsername(username: string) {
  const result = await database.query({
    text: `
        SELECT 
          username
        FROM
          users
        WHERE
          LOWER(username) = LOWER($1) 
      `,
    values: [username],
  });

  if (result.rows.length > 0) {
    throw new ValidationError({
      message: "O username informado ja esta sendo utilizado.",
      action: "Utilize outro username para realizar essa operação.",
    });
  }
}

async function hashPassword(password: string) {
  return await passwordModel.hash(password);
}

const user = {
  create,
  findOneByUsername,
  update,
};

export default user;
