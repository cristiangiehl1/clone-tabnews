import type { NextApiRequest, NextApiResponse } from "next";
import {
  InternalServerError,
  MethodNotAllowedError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from "./errors";

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
  if (
    err instanceof ValidationError ||
    err instanceof NotFoundError ||
    err instanceof UnauthorizedError
  ) {
    return res.status(err.statusCode).json(err);
  }

  const publicErrorObject = new InternalServerError({
    cause: err,
  });

  console.error(publicErrorObject);

  return res.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
