/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vitest/globals': true // allows describe, it, expect in tests
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module" // allows import/export
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vitest/recommended" // optional, adds vitest-specific rules
  ],
  plugins: ["prettier", "vitest"],
  rules: {
    "prettier/prettier": ["error"]
  }
};
