import database from "@/infra/database"
import { waitForAllServices } from "@/tests/orchestrator"
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

beforeAll(async() => {
  await waitForAllServices()
  await database.query({
    text: "drop schema public cascade; create schema public;"
  })
})

function getMigrationsFilesCount() {
  const MIGRATIONS_DIR = join(process.cwd(), "src", "infra", "migrations")
  return readdirSync(MIGRATIONS_DIR).length
}

describe("POST to /api/v1/migrations should return 200", () => {
  test("Filipe Solution", async () => {
      const res1 = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST"
      })
      const resBody1 = await res1.json()

      expect(res1.status).toBe(201)
      expect(Array.isArray(resBody1)).toBe(true)
      expect(resBody1.length).toBeGreaterThan(0)

      const res2 = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST"
      })
      const resBody2 = await res2.json()

      expect(res2.status).toBe(200)
      expect(Array.isArray(resBody2)).toBe(true)
      expect(resBody2.length).toBe(0)
  })

  test("My Solution", async () => {
    const res = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST"
    })
    expect(res.status).toBe(200)

    const migrationsCount = getMigrationsFilesCount()

    const getMigrationsResult = await database.query({
      text: "SELECT * FROM pgmigrations;"
    })

    const getMigrationsValues = getMigrationsResult.rows

    expect(Number.isNaN(migrationsCount)).toBe(false)
    expect(Array.isArray(getMigrationsValues)).toBe(true)
    expect(getMigrationsValues.length).toBe(migrationsCount)
  })
})


