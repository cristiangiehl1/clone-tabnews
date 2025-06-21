import orchestrator from "@/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("PUT /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Should receive MethodNotAllowedError", async () => {
      const res = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "PUT",
      });
      expect(res.status).toBe(405);

      const resBody = await res.json();
      expect(resBody).toEqual({
        name: "MethodNotAllowedError",
        message: "Método não permitido para este endpoint.",
        action:
          "Verifique se o método HTTP enviado é válido para este endpoint.",
        statusCode: 405,
      });
    });
  });
});
