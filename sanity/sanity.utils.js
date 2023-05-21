import { createClient, groq } from "next-sanity";

export async function getTodos() {
  const client = createClient({
    projectId: "0wtsa0of",
    dataset: "production",
    apiVersion: "2023-05-20",
  });

 return client.fetch(
   groq`*[_type == "todo"] {
    _id,
    details,
    "slug": slug.current,
    _createdAt,
    completed
    }`
 );
}
