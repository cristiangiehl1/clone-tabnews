import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import { UnauthorizedError, ValidationError } from "@/infra/errors";
import { signUpSchema } from "@/schemas/auth/sign-up";
import authentication from "@/models/authentication";
import sessions from "@/models/session";
import session from "@/models/session";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(postHandler);
router.delete(deleteHandler);

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

async function deleteHandler(req: NextApiRequest, res: NextApiResponse) {
  const sessionToken = req.cookies.session_id;

  if (!sessionToken) {
    throw new UnauthorizedError({
      message: "Usuario nao possui sessao ativa.",
      action: "Verifique se este usuario esta logado e tente novamente.",
    });
  }

  const sessionFound = await session.findOneValidByToken(sessionToken);
  const expiredSession = await session.expireById(sessionFound.id);

  controller.clearSessionCookie(res);

  return res.status(200).json(expiredSession);
}

export default router.handler(controller.errorHandlers);
