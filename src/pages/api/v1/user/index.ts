import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import controller from "@/infra/controller";
import user from "@/models/user";
import setCookieParser from "set-cookie-parser";
import { UnauthorizedError } from "@/infra/errors";
import session from "@/models/session";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler);

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = setCookieParser.parse(req.headers.cookie || "");
  const parsedSessionId = cookies.find(
    (cookie) => cookie.name === "session_id",
  );

  if (!parsedSessionId) {
    throw new UnauthorizedError({
      message: "Usuario nao possui sessao ativa.",
      action: "Verifique se este usuario esta logado e tente novamente.",
    });
  }

  const sessionFound = await session.findOneValidByToken(parsedSessionId.value);
  const renewdSession = await session.renew(sessionFound.id);
  controller.setSessionCookie({ res, token: renewdSession.token });
  const userFound = await user.findOneById(sessionFound.user_id);

  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, max-age=0, must-revalidate",
  );

  return res.status(200).json(userFound);
}

export default router.handler(controller.errorHandlers);
