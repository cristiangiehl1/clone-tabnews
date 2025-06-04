import database from "@/infra/database"

async function cleanDatabase() {
  await database.query({
    text: "drop schema public cascade; create schema public;"
  })
}

beforeAll(cleanDatabase)

test("GET to /api/v1/migrations should return 200", async () => {  
  const res = await fetch("http://localhost:3000/api/v1/migrations")  
  expect(res.status).toBe(200)

  const resBody = await res.json()

  expect(Array.isArray(resBody)).toBe(true)
  expect(resBody.length).toBeGreaterThan(0)
})

