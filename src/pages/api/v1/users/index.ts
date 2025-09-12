import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import user from "@/models/user";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(postHandler);

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const userInputValues = req.body;
  const newUser = await user.create(userInputValues);

  return res.status(201).json(newUser);
}

export default router.handler(controller.errorHandlers);
