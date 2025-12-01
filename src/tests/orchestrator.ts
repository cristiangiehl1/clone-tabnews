import database from "@/infra/database";
import type { User } from "@/models/entities/users";
import sessions from "@/models/session";
import user from "@/models/user";
import retry from "async-retry";
import Chance from "chance";

const emailHttpUrl = `http://${process.env.EMAIL_HTTP_HOST}:${process.env.EMAIL_HTTP_PORT}`;

async function waitForAllServices() {
  await waitForWebServer();
  await waitForEmailServer();

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

  async function waitForEmailServer() {
    process.stdout.write("🔴 Tentando conectar ao servidor de email");
    return retry(fetchEmailPage, {
      retries: 100,
      maxTimeout: 1000, // 1s
      onRetry: (error: Error, attempt) => {
        process.stdout.write(
          `\n🟡 Attempt ${attempt} - Failed to fetch email page: ${error.message}`,
        );
      },
    });

    async function fetchEmailPage() {
      const response = await fetch(emailHttpUrl);
      if (!response.ok) throw Error(`HTTP error ${response.status}`);
      process.stdout.write(
        "\n🟢 Conexão com o servidor de email foi estabelecida com sucesso!\n",
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

async function createSession(userId: string) {
  return await sessions.create({ userId });
}

async function deleteAllEmails() {
  await fetch(`${emailHttpUrl}/messages`, {
    method: "DELETE",
  });
}

async function getLastEmail(): Promise<{
  id: number;
  sender: string;
  recipients: Array<string>;
  size: string;
  created_at: string;
  subject: string;
  text: string;
}> {
  const emailListResponse = await fetch(`${emailHttpUrl}/messages`, {
    method: "GET",
  });

  const emailListBody = await emailListResponse.json();
  const lastEmailItem = emailListBody.pop();

  const emailTextResponse = await fetch(
    `${emailHttpUrl}/messages/${lastEmailItem.id}.plain`,
    {
      method: "GET",
    },
  );
  const emailTextBody = await emailTextResponse.text();

  return {
    ...lastEmailItem,
    text: emailTextBody,
  };
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
  createUser,
  createSession,
  deleteAllEmails,
  getLastEmail,
};

export default orchestrator;
