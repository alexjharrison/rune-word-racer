import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { qrcode } from "vite-plugin-qrcode";
import rune from "vite-plugin-rune";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    qrcode(),
    vue(),
    rune({ logicPath: path.resolve("./src/logic.ts") }),
  ],
});
