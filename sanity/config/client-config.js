const { createClient } = require("next-sanity");

const config = {
  projectId: "0wtsa0of",
  dataset: "production",
  apiVersion: "2023-05-20",
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config)
