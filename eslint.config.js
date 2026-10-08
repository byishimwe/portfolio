import js from "@eslint/js";
import tseslint from "typescript-eslint";
import hooks from "eslint-plugin-react-hooks";
export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "tmp/**",
      "test-results/**",
      "playwright-report/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "react-hooks": hooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        Image: "readonly",
        matchMedia: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        sessionStorage: "readonly",
        history: "readonly",
      },
    },
  },
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      globals: { console: "readonly", process: "readonly", URL: "readonly" },
    },
  },
);
