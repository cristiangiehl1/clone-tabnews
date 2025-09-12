import type { NextApiRequest, NextApiResponse } from "next";
import {
  InternalServerError,
  MethodNotAllowedError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from "./errors";
import * as cookie from "cookie";
import session from "@/models/session";

function onNoMatchHandler(req: NextApiRequest, res: NextApiResponse) {
  const publicErrorObject = new MethodNotAllowedError({});
  return res
    .status(publicErrorObject.statusCode)
    .json(publicErrorObject.toJSON());
}

function onErrorHandler(
  err: unknown,
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (err instanceof ValidationError || err instanceof NotFoundError) {
    return res.status(err.statusCode).json(err);
  }

  if (err instanceof UnauthorizedError) {
    clearSessionCookie(res);
    return res.status(err.statusCode).json(err);
  }

  const publicErrorObject = new InternalServerError({
    cause: err,
  });

  console.error(publicErrorObject);

  return res.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function setSessionCookie({
  res,
  token,
}: {
  token: string;
  res: NextApiResponse;
}) {
  const setCookie = cookie.serialize("session_id", token, {
    path: "/",
    // expires: new Date(newSession.expires_at), // data exata de expiracao do cookie
    maxAge: session.EXPIRATION_IN_MILLISECONDS / 1000,
    secure: process.env.NODE_ENV === "development" ? false : true, // aceeita ou nao HTTP ou apenas HTTPS
    httpOnly: true, // codigo javascript do client-side nao consegue acessar os cookies marcados com http-only, tambem conhecido como XXS (Cross-Site Scripting)
  });

  res.setHeader("Set-Cookie", setCookie);
}

function clearSessionCookie(res: NextApiResponse) {
  const setCookie = cookie.serialize("session_id", "invalid", {
    path: "/",
    // expires: new Date(newSession.expires_at), // data exata de expiracao do cookie
    maxAge: -1,
    secure: process.env.NODE_ENV === "development" ? false : true, // aceeita ou nao HTTP ou apenas HTTPS
    httpOnly: true, // codigo javascript do client-side nao consegue acessar os cookies marcados com http-only, tambem conhecido como XXS (Cross-Site Scripting)
  });

  res.setHeader("Set-Cookie", setCookie);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
  setSessionCookie,
  clearSessionCookie,
};

export default controller;
