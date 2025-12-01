import email from "@/infra/email";
import orchestrator from "@/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

beforeEach(async () => {
  await orchestrator.deleteAllEmails();
});

describe("infra/email.ts", () => {
  test("send()", async () => {
    await email.send({
      from: "Bit Bites <contato@bitbites.com.br>",
      to: "cristiangiehl@gmail.com",
      subject: "Test de assunto",
      text: "Teste de corpo.",
    });

    await email.send({
      from: "Bit Bites <contato@bitbites.com.br>",
      to: "cristiangiehl@gmail.com",
      subject: "Último email",
      text: "Corpo do último email.",
    });

    const lastEmail = await orchestrator.getLastEmail();

    expect(lastEmail.sender).toBe("<contato@bitbites.com.br>");
    expect(lastEmail.recipients[0]).toBe("<cristiangiehl@gmail.com>");
    expect(lastEmail.subject).toBe("Último email");
    expect(lastEmail.text).toBe("Corpo do último email.\r\n");
  });
});
