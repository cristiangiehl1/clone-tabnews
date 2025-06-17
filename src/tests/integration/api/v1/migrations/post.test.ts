import database from "@/infra/database";
import { waitForAllServices } from "@/tests/orchestrator";
import { readdirSync } from "node:fs";
import { join } from "node:path";

beforeAll(async () => {
  await waitForAllServices();
  await database.query({
    text: "drop schema public cascade; create schema public;",
  });
});

function getMigrationsFilesCount() {
  const MIGRATIONS_DIR = join(process.cwd(), "src", "infra", "migrations");
  return readdirSync(MIGRATIONS_DIR).length;
}

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      test("For the first time", async () => {
        const res = await fetch("http://localhost:3000/api/v1/migrations", {
          method: "POST",
        });
        const resBody1 = await res.json();

        expect(res.status).toBe(201);
        expect(Array.isArray(resBody1)).toBe(true);
        expect(resBody1.length).toBeGreaterThan(0);
      });
      test("For the second time", async () => {
        const res = await fetch("http://localhost:3000/api/v1/migrations", {
          method: "POST",
        });
        const resBody2 = await res.json();

        expect(res.status).toBe(200);
        expect(Array.isArray(resBody2)).toBe(true);
        expect(resBody2.length).toBe(0);
      });
    });
  });
  test("My Solution", async () => {
    const res = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST",
    });
    expect(res.status).toBe(200);

    const migrationsCount = getMigrationsFilesCount();

    const getMigrationsResult = await database.query({
      text: "SELECT * FROM pgmigrations;",
    });

    const getMigrationsValues = getMigrationsResult.rows;

    expect(Number.isNaN(migrationsCount)).toBe(false);
    expect(Array.isArray(getMigrationsValues)).toBe(true);
    expect(getMigrationsValues.length).toBe(migrationsCount);
  });
});
