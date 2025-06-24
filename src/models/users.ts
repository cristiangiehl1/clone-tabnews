import database from "@/infra/database";
import { NotFoundError, ValidationError } from "@/infra/errors";

export interface CreateUserParams {
  username: string;
  email: string;
  password: string;
}

async function create({ email, password, username }: CreateUserParams) {
  await validateUniqueEmail(email);
  await validateUniqueUsername(username);
  const newUser = await runInsertQuery({ email, password, username });
  return newUser;

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
        action: "Utilize outro email para realizar o cadastro,",
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
        action: "Utilize outro username para realizar o cadastro,",
      });
    }
  }

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

async function findOneByUsername(username: string) {
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

const user = {
  create,
  findOneByUsername,
};

export default user;
