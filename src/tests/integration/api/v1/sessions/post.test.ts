import orchestrator from "@/tests/orchestrator";
import { version as uuidVersion } from "uuid";
import session from "@/models/session";
import setCookieParser from "set-cookie-parser";
import sessions from "@/models/session";

beforeEach(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/sessions", () => {
  describe("Anonymous user", () => {
    test("With incorrect `email` but correct `password`", async () => {
      const password = "senha-correta";

      await orchestrator.createUser({
        password,
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "email.errado@curso.dev",
          password,
        }),
      });
      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Dados de autenticacao nao conferem.",
        action: "Verifique se os dados enviados estao corretos.",
        statusCode: 401,
      });
    });

    test("With correct `email` but incorrect `password`", async () => {
      const email = "email.correto@curso.dev";

      await orchestrator.createUser({
        email,
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: "senha-incorreta",
        }),
      });
      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Dados de autenticacao nao conferem.",
        action: "Verifique se os dados enviados estao corretos.",
        statusCode: 401,
      });
    });

    test("With incorrect `email` and `password`", async () => {
      const email = "email.correto@curso.dev";

      await orchestrator.createUser({
        email,
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "email.incorreto@curso.dev",
          password: "senha-incorreta",
        }),
      });
      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Dados de autenticacao nao conferem.",
        action: "Verifique se os dados enviados estao corretos.",
        statusCode: 401,
      });
    });

    test("With correct `email` and `password`", async () => {
      const email = "tudo.correto@curso.dev";
      const password = "tudocorreto";

      const newUser = await orchestrator.createUser({
        email,
        password,
      });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      expect(response.status).toBe(201);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        id: responseBody.id,
        token: responseBody.token,
        user_id: newUser.id,
        expires_at: responseBody.expires_at,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.expires_at)).not.toBeNaN();
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      const expiresAt = new Date(responseBody.expires_at);
      const createdAt = new Date(responseBody.created_at);

      expiresAt.setMilliseconds(0);
      createdAt.setMilliseconds(0);

      expect(expiresAt.getTime() - createdAt.getTime()).toBe(
        session.EXPIRATION_IN_MILLISECONDS,
      );

      const setCookieHeader = response.headers.get("set-cookie");
      const parsedSetCookie = setCookieParser(setCookieHeader ?? "", {
        map: true,
      });

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: responseBody.token,
        maxAge: sessions.EXPIRATION_IN_MILLISECONDS / 1000,
        path: "/",
        httpOnly: true,
      });
    });
  });
});
