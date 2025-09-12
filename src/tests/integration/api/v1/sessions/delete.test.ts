import sessions from "@/models/session";
import orchestrator from "@/tests/orchestrator";
import { version as uuidVersion } from "uuid";
import setCookieParser from "set-cookie-parser";

beforeEach(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("DELETE /api/v1/sessions", () => {
  describe("Default user", () => {
    test("With valid session", async () => {
      const username = "UserWithValidSession";

      const createdUser = await orchestrator.createUser({
        username,
      });
      const createdSession = await orchestrator.createSession(createdUser.id);

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "DELETE",
        headers: {
          Cookie: `session_id=${createdSession.token}`,
        },
      });
      expect(response.status).toBe(200);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        id: responseBody.id,
        token: responseBody.token,
        user_id: createdUser.id,
        expires_at: responseBody.expires_at,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      expect(
        responseBody.expires_at < createdSession.expires_at.toISOString(),
      ).toEqual(true);
      expect(
        responseBody.updated_at > createdSession.updated_at.toISOString(),
      ).toEqual(true);

      // Set-Cookie assertions
      const setCookieHeader = response.headers.get("set-cookie");
      const parsedSetCookie = setCookieParser(setCookieHeader ?? "", {
        map: true,
      });

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: "invalid",
        maxAge: -1,
        path: "/",
        httpOnly: true,
      });

      // Double check assertions
      const doubleCheckResponse = await fetch(
        "http://localhost:3000/api/v1/user",
        {
          headers: {
            Cookie: `session_id=${createdSession.token}`,
          },
        },
      );

      expect(doubleCheckResponse.status).toBe(401);

      const doubleCheckResponseBody = await doubleCheckResponse.json();

      expect(doubleCheckResponseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuario nao possui sessao ativa.",
        action: "Verifique se este usuario esta logado e tente novamente.",
        statusCode: 401,
      });
    });

    test("With nonexistent session", async () => {
      const nonExistentSession =
        "4f6348e6fa9828c2247fc13d78d505d50d87cadf81b7d63c9f3d73d353e43635b7ce2334d9e6698c5c4481b2e2531f64";

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "DELETE",
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

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "DELETE",
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
    });
  });
});
