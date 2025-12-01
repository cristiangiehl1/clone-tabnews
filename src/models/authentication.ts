import { NotFoundError, UnauthorizedError } from "@/infra/errors";
import type { User } from "./entities/users";
import password from "./password";
import user from "./user";

async function getAuthenticatedUser({
  email,
  providedPassword,
}: {
  email: string;
  providedPassword: string;
}): Promise<User> {
  try {
    const storedUser = await findUserByEmail(email);
    await validatePassword({
      providedPassword,
      storedPassword: storedUser.password,
    });

    return storedUser;
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      throw new UnauthorizedError({
        message: "Dados de autenticacao nao conferem.",
        action: "Verifique se os dados enviados estao corretos.",
      });
    }

    throw err;
  }

  async function findUserByEmail(email: string): Promise<User> {
    try {
      return await user.findOneByEmail(email);
    } catch (err) {
      if (err instanceof NotFoundError) {
        throw new UnauthorizedError({
          message:
            "Não foi possível encontrar um usuário com o e-mail informado.",
          action:
            "Verifique se o endereço está correto ou cadastre uma nova conta.",
        });
      }
      throw err;
    }
  }

  async function validatePassword({
    providedPassword,
    storedPassword,
  }: {
    providedPassword: string;
    storedPassword: string;
  }) {
    const correctPasswordMatch = await password.compare(
      providedPassword,
      storedPassword,
    );

    if (!correctPasswordMatch) {
      throw new UnauthorizedError({
        message: "Senha nao confere.",
        action: "Verifique se este dado esta correto.",
      });
    }
  }
}

const authentication = {
  getAuthenticatedUser,
};

export default authentication;
