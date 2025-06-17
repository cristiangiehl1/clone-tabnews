import database from "@/infra/database";
import retry from "async-retry";

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

const orchestrator = {
  waitForAllServices,
  clearDatabase,
};

export default orchestrator;
