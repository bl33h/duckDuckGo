/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: .eslintrc.cjs
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"], // Implement the airbnb guidelines
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Rule to forbid semicolons along the code
    semi: ["error", "never"],
    // Rule that returns a warning in case there is a line with more than 120 characters
    "max-len": ["warn", { code: 120 }],
  },
};
