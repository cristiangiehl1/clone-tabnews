import sessions from "@/models/session";
import orchestrator from "@/tests/orchestrator";
import { version as uuidVersion } from "uuid";
import setCookieParser from "set-cookie-parser";

beforeEach(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("GET /api/v1/user", () => {
  describe("Default user", () => {
    test("With valid session", async () => {
      const username = "UserWithValidSession";

      const createdUser = await orchestrator.createUser({
        username,
      });
      const createdSession = await orchestrator.createSession(createdUser.id);

      const response = await fetch("http://localhost:3000/api/v1/user", {
        headers: {
          Cookie: `session_id=${createdSession.token}`,
        },
      });
      expect(response.status).toBe(200);

      const cacheControl = response.headers.get("Cache-Control");

      expect(cacheControl).toBe(
        "no-store, no-cache, max-age=0, must-revalidate",
      );

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        id: createdUser.id,
        username,
        email: createdUser.email,
        password: createdUser.password,
        created_at: createdUser.created_at.toISOString(),
        updated_at: createdUser.updated_at.toISOString(),
      });
      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      // session renewal assertions
      const renewedSessionObject = await sessions.findOneValidByToken(
        createdSession.token,
      );

      expect(
        renewedSessionObject.expires_at > createdSession.expires_at,
      ).toEqual(true);
      expect(
        renewedSessionObject.updated_at > createdSession.updated_at,
      ).toEqual(true);

      // Set-Cookie assertions
      const setCookieHeader = response.headers.get("set-cookie");
      const parsedSetCookie = setCookieParser(setCookieHeader ?? "", {
        map: true,
      });

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: createdSession.token,
        maxAge: sessions.EXPIRATION_IN_MILLISECONDS / 1000,
        path: "/",
        httpOnly: true,
      });
    });

    test("With valid session close to expiration date", async () => {
      jest.useFakeTimers({
        now: new Date(Date.now() - sessions.EXPIRATION_IN_MILLISECONDS / 2),
      });

      const username = "UserWithHalfLifeSession";

      const createdUser = await orchestrator.createUser({
        username,
      });
      const createdSession = await orchestrator.createSession(createdUser.id);

      jest.useRealTimers();

      const response = await fetch("http://localhost:3000/api/v1/user", {
        headers: {
          Cookie: `session_id=${createdSession.token}`,
        },
      });

      expect(response.status).toBe(200);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        id: createdUser.id,
        username,
        email: createdUser.email,
        password: createdUser.password,
        created_at: createdUser.created_at.toISOString(),
        updated_at: createdUser.updated_at.toISOString(),
      });
      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      // session renewal assertions
      const renewedSessionObject = await sessions.findOneValidByToken(
        createdSession.token,
      );

      expect(
        renewedSessionObject.expires_at > createdSession.expires_at,
      ).toEqual(true);
      expect(
        renewedSessionObject.updated_at > createdSession.updated_at,
      ).toEqual(true);

      // Set-Cookie assertions
      const setCookieHeader = response.headers.get("set-cookie");
      const parsedSetCookie = setCookieParser(setCookieHeader ?? "", {
        map: true,
      });

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: createdSession.token,
        maxAge: sessions.EXPIRATION_IN_MILLISECONDS / 1000,
        path: "/",
        httpOnly: true,
      });
    });

    test("With nonexistent session", async () => {
      const nonExistentSession =
        "4f6348e6fa9828c2247fc13d78d505d50d87cadf81b7d63c9f3d73d353e43635b7ce2334d9e6698c5c4481b2e2531f64";

      const response = await fetch("http://localhost:3000/api/v1/user", {
        headers: {
          Cookie: `session_id=${nonExistentSession}`,
        },
      });
      expect(response.status).toBe(401);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuario nao possui sessao ativa.",
        action: "Verifique se este usuario esta logado e tente novamente.",
        statusCode: 401,
      });

      const parsedSetCookie = setCookieParser(
        response.headers.get("set-cookie") || "",
        {
          map: true,
        },
      );

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: "invalid",
        maxAge: -1,
        path: "/",
        httpOnly: true,
      });
    });

    test("With expired session", async () => {
      jest.useFakeTimers({
        now: new Date(Date.now() - sessions.EXPIRATION_IN_MILLISECONDS),
      });

      const username = "UserWithExpiredSession";

      const createdUser = await orchestrator.createUser({
        username,
      });
      const createdSession = await orchestrator.createSession(createdUser.id);

      jest.useRealTimers();

      const response = await fetch("http://localhost:3000/api/v1/user", {
        headers: {
          Cookie: `session_id=${createdSession.token}`,
        },
      });
      expect(response.status).toBe(401);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuario nao possui sessao ativa.",
        action: "Verifique se este usuario esta logado e tente novamente.",
        statusCode: 401,
      });

      const parsedSetCookie = setCookieParser(
        response.headers.get("set-cookie") || "",
        {
          map: true,
        },
      );

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: "invalid",
        maxAge: -1,
        path: "/",
        httpOnly: true,
      });
    });

    test("With empty headers", async () => {
      const response = await fetch("http://localhost:3000/api/v1/user");
      expect(response.status).toBe(401);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuario nao possui sessao ativa.",
        action: "Verifique se este usuario esta logado e tente novamente.",
        statusCode: 401,
      });
    });
  });
});
