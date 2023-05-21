import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";


const config = defineConfig({
  projectId: "0wtsa0of",
  dataset: "production",
  title: "Todo App",
  apiVersion: "2023-05-20",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
