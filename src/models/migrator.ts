import database from "@/infra/database";
import { runner, type RunnerOption } from "node-pg-migrate";
import { resolve } from "node:path";

async function runMigrations({ dryRun = true }: { dryRun?: boolean }) {
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    const runnerOptions: RunnerOption = {
      dir: resolve(process.cwd(), "dist", "infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      log: () => {},
      dryRun,
      dbClient,
    };

    return await runner(runnerOptions);
  } finally {
    await dbClient?.end();
  }
}

const migrator = {
  runMigrations,
};

export default migrator;
