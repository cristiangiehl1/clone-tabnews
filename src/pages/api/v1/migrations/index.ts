import type { NextApiRequest, NextApiResponse } from "next";
import { runner, type RunnerOption } from "node-pg-migrate";
import { join } from "node:path";
import database from "@/infra/database";

export default async function migrations(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(request.method || "GET"))
    return response
      .status(405)
      .json({ error: `Method ${request.method} not allowed` });

  let dbClient;

  try {
    dbClient = await database.getNewClient();
    const runnerOptions: RunnerOption = {
      // databaseUrl: dbURL,
      dbClient: dbClient,
      dir: join(process.cwd(), "dist", "infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
    };

    if (request.method === "POST") {
      const migratedMigrations = await runner({
        ...runnerOptions,
        dryRun: false,
      });

      if (migratedMigrations.length > 0) {
        return response.status(201).json(migratedMigrations);
      }

      return response.status(200).json(migratedMigrations);
    }

    if (request.method === "GET") {
      const pendingMigrations = await runner({
        ...runnerOptions,
        dryRun: true,
      });
      return response.status(200).json(pendingMigrations);
    }
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (dbClient) await dbClient.end();
  }
}
