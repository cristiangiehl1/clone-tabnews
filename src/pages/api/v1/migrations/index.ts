import type { NextApiRequest, NextApiResponse } from 'next'
import { runner, type RunnerOption } from 'node-pg-migrate'
import { join } from "node:path"
import database from '@/infra/database'

export default async function migrations(request: NextApiRequest, response: NextApiResponse) {
  if(request.method !== "POST" && request.method !== "GET") return response.status(405).end()

  const dbURL = process.env.DATABASE_URL 
  const dbCLient = await database.getNewClient()
  
  if (!dbURL) return response.status(500).json({ error: "Internal Server Error", message: "DATABASE_URL is not defined" })
    
  const runnerOptions: RunnerOption = {
    databaseUrl: dbURL,
    dbClient: dbCLient,
    dir: join(process.cwd(), "dist", "infra", "migrations"),
    direction: 'up',
    migrationsTable: 'pgmigrations',
    verbose: true,
  }

  if (request.method === "POST") {
    const migratedMigrations = await runner({
      ...runnerOptions,
      dryRun: false,
    })

    await dbCLient.end()

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations)
    }

    return response.status(200).json(migratedMigrations)
  }

  if (request.method === "GET") {
    const pendingMigrations = await runner({
      ...runnerOptions,
      dryRun: true,
   })
    await dbCLient.end()
    return response.status(200).json(pendingMigrations)
  }
}