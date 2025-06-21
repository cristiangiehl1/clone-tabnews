import type { NextApiRequest, NextApiResponse } from "next";
import { InternalServerError, MethodNotAllowedError } from "./errors";

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
  const publicErrorObject = new InternalServerError({
    cause: err,
    statusCode:
      typeof err === "object" && err !== null && "statusCode" in err
        ? (err as { statusCode?: number }).statusCode
        : undefined,
  });

  console.error(publicErrorObject);

  return res
    .status(publicErrorObject.statusCode || 500)
    .json(publicErrorObject.toJSON());
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
