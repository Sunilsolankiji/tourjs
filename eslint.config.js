import js from "@eslint/js";

export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        global: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "no-debugger": "warn",
      "prefer-const": "warn",
      "eqeqeq": ["warn", "always"],
      "curly": ["warn", "all"],
      "brace-style": ["warn", "1tbs"],
      "quotes": ["warn", "single"],
      "semi": ["warn", "always"],
      "indent": ["warn", 2],
      "comma-dangle": ["warn", "always-multiline"],
      "no-trailing-spaces": "warn",
      "no-multiple-empty-lines": ["warn", { max: 2 }]
    }
  }
];

