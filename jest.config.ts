import type { Config } from "jest";
import nextJest from "next/jest";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig: Config = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"], // define onde o Jest deve procurar por módulos.
  // setupFiles: ["<rootDir>/src/tests/jest-setup-tests.ts"]
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  }, // necessario configurar para que o Jest reconheca os alias de path do Next.
  testTimeout: 60000, // 60s
};

export default createJestConfig(jestConfig);
