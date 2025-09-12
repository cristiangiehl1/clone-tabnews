import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import { ValidationError } from "@/infra/errors";
import { signUpSchema } from "@/schemas/auth/sign-up";
import authentication from "@/models/authentication";
import sessions from "@/models/session";
import * as cookie from "cookie";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(postHandler);

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const { success, data } = signUpSchema.safeParse(req.body);

  if (!success) {
    throw new ValidationError({
      message: "Email e/ou senha nao informados.",
    });
  }

  const authenticatedUser = await authentication.getAuthenticatedUser({
    email: data.email,
    providedPassword: data.password,
  });

  const newSession = await sessions.create({ userId: authenticatedUser.id });

  controller.setSessionCookie({ res, token: newSession.token });

  return res.status(201).json(newSession);
}

export default router.handler(controller.errorHandlers);
