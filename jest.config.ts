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
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testTimeout: 60000,
};

export default createJestConfig(jestConfig);
