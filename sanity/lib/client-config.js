import { createClient } from "next-sanity";

const sanity = createClient({
  projectId: "0wtsa0of",
  dataset: "production",
  apiVersion: "2023-05-20",
  useCdn: false, 
});

export default sanity;
