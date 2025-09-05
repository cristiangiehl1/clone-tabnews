import database from "@/infra/database";
import type { User } from "@/models/entities/users";
import type { CreateUserParams } from "@/models/users";
import user from "@/models/users";
import retry from "async-retry";
import Chance from "chance";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    process.stdout.write("🔴 Tentando conectar ao servidor");
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000, // 1s
      onRetry: (error: Error, attempt) => {
        process.stdout.write(
          `\n🟡 Attempt ${attempt} - Failed to fetch status page: ${error.message}`,
        );
      },
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      if (!response.ok) throw Error(`HTTP error ${response.status}`);
      process.stdout.write(
        "\n🟢 Conexão com o servidor foi estabelecida com sucesso!\n",
      );
    }
  }
}

async function clearDatabase() {
  await database.query({
    text: "drop schema public cascade; create schema public;",
  });
}

async function runPendingMigrations() {
  await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
}

async function createUser(data: {
  email?: string;
  username?: string;
  password?: string;
}): Promise<User> {
  const chance = new Chance();

  return await user.create({
    username: data.username || chance.name(),
    email: data.email || chance.email(),
    password: data.password || "validpassword",
  });
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
  createUser,
};

export default orchestrator;
