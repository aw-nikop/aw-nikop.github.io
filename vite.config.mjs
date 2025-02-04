import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import handlebars from "vite-plugin-handlebars";

import { readdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCSS_Logger = {
  warn(message, options) {
    // Mute "Mixed Declarations" warning
    if (options.deprecation && message.includes("mixed-decls")) {
      return;
    }
    // List all other warnings
    console.warn(`▲ [WARNING]: ${message}`);
  },
};

function getDirFiles(dir) {
  const docsDir = resolve(__dirname, "src", dir);
  const docFiles = readdirSync(docsDir).filter((file) => file.endsWith(".html"));

  const docInputs = docFiles.reduce((inputs, file) => {
    const name = file.replace(".html", "");
    inputs[name] = resolve(docsDir, file);
    return inputs;
  }, {});

  return docInputs
}


export default {
  base: "/",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src", "partials"),
    }),
  ],
  root: resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "index.html"),
        ...getDirFiles("solutions"),
        ...getDirFiles("altons-articles"),
        data: resolve(__dirname, "src", "public/solutions.json"),
        navbar: resolve(__dirname, "src", "partials/navbar.html"),
        footer: resolve(__dirname, "src", "partials/footer.html"),
        team: resolve(__dirname, "src", "team.html"),
        "thank-you": resolve(__dirname, "src", "thank-you.html"),
        404: resolve(__dirname, "src", "404.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        logger: SCSS_Logger,
      },
    },
  },
};
