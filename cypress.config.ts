import { defineConfig } from "cypress";

export default defineConfig({
  "cypress-watch-and-reload": {
    watch: ["page/*", "circle.yml"],
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-watch-and-reload/plugins")(on, config);
      return config;
    },
    baseUrl: "http://localhost:5050",
  },
});
