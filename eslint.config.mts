import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:jest/recommended",
      "prettier",
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-namespace": "warn",
    },
    ignorePatterns: ["node_modules", ".next", "package-lock.yaml", "dist"],
  }),
];

export default eslintConfig;
