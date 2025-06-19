import orchestrator from "@/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/status", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const res = await fetch("http://localhost:3000/api/v1/status");
      expect(res.status).toBe(200);

      const resBody = await res.json();

      const parsedUpdatedAt = new Date(resBody.updated_at).toISOString();
      expect(resBody.updated_at).toEqual(parsedUpdatedAt);

      expect(resBody.dependencies.database.version).toEqual("16.0");
      expect(resBody.dependencies.database.max_connections).toEqual(100);
      expect(resBody.dependencies.database.total_connections).toEqual(1);
    });

    // eslint-disable-next-line jest/no-disabled-tests
    test.skip("Testando SQL Injeciton", () => {
      fetch(
        "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
      );

      expect(1).toBe(1);
    });
  });
});
