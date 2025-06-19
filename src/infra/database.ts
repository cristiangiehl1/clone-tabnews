import { Client, type QueryConfig } from "pg";

async function query(queryObj: QueryConfig) {
  let client;
  try {
    client = await getNewClient();
    return await client.query(queryObj);
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client?.end();
  }
}

async function getNewClient() {
  const portEnv = process.env.POSTGRES_PORT;
  if (!portEnv) {
    throw new Error("POSTGRES_PORT is not defined in environment variables");
  }

  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: parseInt(portEnv, 10),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  });

  await client.connect();
  return client;
}

const database = {
  query,
  getNewClient,
};

function getSSLValues() {
  if (process.env.POSTGRES_CA) return { ca: process.env.POSTGRES_CA };

  return process.env.NODE_ENV === "production" ? true : false;
}

export default database;
