import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import user from "@/models/users";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler);

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const username = req.query.username as string;
  const userFound = await user.findOneByUsername(username);
  return res.status(200).json(userFound);
}

export default router.handler(controller.errorHandlers);
