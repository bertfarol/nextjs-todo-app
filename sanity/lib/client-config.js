import { createClient } from "next-sanity";

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-05-20",
  useCdn: false, 
});

export default sanity;
