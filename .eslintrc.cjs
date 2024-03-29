module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",-
    "plugin:rune/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [],
  rules: {
    "no-unused-vars": "off"
  },
}
