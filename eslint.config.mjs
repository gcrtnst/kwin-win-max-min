import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended", prettier],
    rules: {
      "no-undef": "off",
      "no-var": "error",
      strict: ["error", "global"],
      eqeqeq: ["error", "always"],
    },
    languageOptions: { ecmaVersion: 2016, sourceType: "script" },
  },
]);
