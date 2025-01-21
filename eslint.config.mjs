import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import html from "@html-eslint/eslint-plugin";
import * as cssPlugin from "eslint-plugin-css"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
  },
  {
    ...cssPlugin.configs["flat/recommended"],
    files: ["**/*.css"],
  }
];