import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import user from "@/models/users";
import { ValidationError } from "@/infra/errors";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler);
router.patch(patchHandler);

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const username = req.query.username;

  if (!username || Array.isArray(username)) {
    throw new ValidationError({ message: "Nome de usuario invalido." });
  }

  const userFound = await user.findOneByUsername(username);
  return res.status(200).json(userFound);
}

async function patchHandler(req: NextApiRequest, res: NextApiResponse) {
  const username = req.query.username;
  const userInputValues = req.body;

  if (!username || Array.isArray(username)) {
    throw new ValidationError({ message: "Nome de usuario invalido." });
  }

  const userUpdated = await user.update({ username, params: userInputValues });

  return res.status(200).json(userUpdated);
}

export default router.handler(controller.errorHandlers);
