import orchestrator from "@/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("GET /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      const res = await fetch("http://localhost:3000/api/v1/migrations");
      expect(res.status).toBe(200);

      const resBody = await res.json();

      expect(Array.isArray(resBody)).toBe(true);
      expect(resBody.length).toBeGreaterThan(0);
    });
  });
});
