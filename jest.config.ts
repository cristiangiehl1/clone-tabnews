import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^models/(.*)$": "<rootDir>/models/$1"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
}

export default config
