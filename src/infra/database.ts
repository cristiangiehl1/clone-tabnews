import { Client, type QueryConfig } from 'pg'

async function query(queryObj: QueryConfig) {
  const portEnv = process.env.POSTGRES_PORT;
  if (!portEnv) {
    throw new Error("POSTGRES_PORT is not defined in environment variables");
  }
  
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: parseInt(portEnv, 10) ,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  })
  await client.connect()
  const result = await client.query(queryObj)
  await client.end()

  return result
}

export default {
  query
}