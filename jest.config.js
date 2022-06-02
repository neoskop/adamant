/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/tests/*.spec.ts",
    "**/src/**/*.spec.ts",
    "!**/src/ng/**/*.spec.ts"
  ]
};