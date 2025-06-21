import { resolve } from "node:path";
import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "@/infra/database";
import { runner, type RunnerOption } from "node-pg-migrate";
import type { Client } from "pg";
import controller from "@/infra/controller";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler).post(postHandler);

function getRunnerOptions({
  dbClient,
  dryRun = true,
}: {
  dbClient: Client;
  dryRun?: boolean;
}): RunnerOption {
  return {
    dir: resolve(process.cwd(), "dist", "infra", "migrations"),
    direction: "up",
    migrationsTable: "pgmigrations",
    verbose: true,
    dryRun,
    dbClient,
  };
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  let dbClient;
  try {
    dbClient = await database.getNewClient();
    const pendingMigrations = await runner(getRunnerOptions({ dbClient }));

    return res.json(pendingMigrations);
  } finally {
    await dbClient?.end();
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  let dbClient;
  try {
    dbClient = await database.getNewClient();
    const migratedMigrations = await runner(
      getRunnerOptions({ dbClient, dryRun: false }),
    );

    return res
      .status(migratedMigrations.length > 0 ? 201 : 200)
      .json(migratedMigrations);
  } finally {
    await dbClient?.end();
  }
}

export default router.handler(controller.errorHandlers);
