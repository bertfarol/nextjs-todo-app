import { createClient } from "next-sanity";

const sanity = createClient({
  projectId: "0wtsa0of",
  dataset: "production",
  apiVersion: "2023-05-20",
  useCdn: process.env.NODE_ENV === "production",
});

export default sanity;
