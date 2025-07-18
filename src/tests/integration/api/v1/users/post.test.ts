import orchestrator from "@/tests/orchestrator";
import { version as uuidVersion } from "uuid";

beforeEach(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/users", () => {
  describe("Anonymous user", () => {
    test("With unique and valid data", async () => {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "cristiangiehl",
          email: "cristian@curso.dev",
          password: "senha123",
        }),
      });
      expect(response.status).toBe(201);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "cristiangiehl",
        email: "cristian@curso.dev",
        password: "senha123",
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });
      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();
    });

    test("With duplicated 'email'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "cristiangiehl",
          email: "cristian@curso.dev",
          password: "senha123",
        }),
      });
      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "emailduplicado2",
          email: "Cristian@curso.dev",
          password: "senha123",
        }),
      });
      expect(response2.status).toBe(400);

      const responseBody2 = await response2.json();

      expect(responseBody2).toEqual({
        name: "ValidationError",
        message: "O email informado ja esta sendo utilizado.",
        action: "Utilize outro email para realizar o cadastro,",
        statusCode: 400,
      });
    });

    test("With duplicated 'username'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "usernameduplicado",
          email: "usernameduplicado@curso.dev",
          password: "senha123",
        }),
      });
      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "Usernameduplicado",
          email: "usernameduplicado2@curso.dev",
          password: "senha123",
        }),
      });
      expect(response2.status).toBe(400);

      const responseBody2 = await response2.json();

      expect(responseBody2).toEqual({
        name: "ValidationError",
        message: "O username informado ja esta sendo utilizado.",
        action: "Utilize outro username para realizar o cadastro,",
        statusCode: 400,
      });
    });
  });
});
