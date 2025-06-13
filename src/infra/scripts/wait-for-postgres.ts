import { exec, type ExecException } from "node:child_process";

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error: ExecException | null, stdout: string) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    if (error) {
      console.error("Erro ao verificar o Postgres:", error.message);
      return;
    }

    console.log("\n🟢 Postgres está pronto e aceitando conexões!\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkPostgres();
