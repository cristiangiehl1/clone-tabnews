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
  // res.setHeader("Set-Cookie", `session_id=${newSession.token}; Path=/`);

  const setCookie = cookie.serialize("session_id", newSession.token, {
    path: "/",
    // expires: new Date(newSession.expires_at), // data exata de expiracao do cookie
    maxAge: sessions.EXPIRATION_IN_MILLISECONDS / 1000,
    secure: process.env.NODE_ENV === "development" ? false : true, // aceeita ou nao HTTP ou apenas HTTPS
    httpOnly: true, // codigo javascript do client-side nao consegue acessar os cookies marcados com http-only, tambem conhecido como XXS (Cross-Site Scripting)
  });

  res.setHeader("Set-Cookie", setCookie);

  return res.status(201).json(newSession);
}

export default router.handler(controller.errorHandlers);
