import { NextResponse } from "next/server";
import { runner, type RunnerOption } from "node-pg-migrate";
import { resolve } from "node:path";
import database from "@/infra/database";

/**
 * GET: retorna as migrações pendentes (dryRun: true)
 */
export async function GET() {
  let dbClient;
  try {
    dbClient = await database.getNewClient();

    const runnerOptions: RunnerOption = {
      dbClient,
      dir: resolve(process.cwd(), "dist", "infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
      dryRun: true,
    };

    const pendingMigrations = await runner(runnerOptions);
    return NextResponse.json(pendingMigrations);
  } catch (err) {
    console.error("[MIGRATIONS][GET]", err);
    return NextResponse.json(
      { error: "Failed to check pending migrations" },
      { status: 500 },
    );
  } finally {
    if (dbClient) await dbClient.end();
  }
}

/**
 * POST: executa as migrações (dryRun: false)
 */
export async function POST() {
  let dbClient;
  try {
    dbClient = await database.getNewClient();

    const runnerOptions: RunnerOption = {
      dbClient,
      dir: resolve(process.cwd(), "dist", "infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
      dryRun: false,
    };

    const migratedMigrations = await runner(runnerOptions);

    return NextResponse.json(migratedMigrations, {
      status: migratedMigrations.length > 0 ? 201 : 200,
    });
  } catch (err) {
    console.error("[MIGRATIONS][POST]", err);
    return NextResponse.json({ error: "Migration failed" }, { status: 500 });
  } finally {
    if (dbClient) await dbClient.end();
  }
}
