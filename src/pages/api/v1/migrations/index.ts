import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import migrator from "@/models/migrator";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler).post(postHandler);

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const pendingMigrations = await migrator.runMigrations({});
  return res.status(200).json(pendingMigrations);
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const migratedMigrations = await migrator.runMigrations({
    dryRun: false,
  });

  return res
    .status(migratedMigrations.length > 0 ? 201 : 200)
    .json(migratedMigrations);
}

export default router.handler(controller.errorHandlers);
