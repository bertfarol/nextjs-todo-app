import { createClient, groq } from "next-sanity";

const feedQuery = groq`
    *[_type == "todo"] {
    _id,
    ...
    } | order(_createdAt desc)
`;

export default async function handler(req, res) {
  const client = createClient({
    projectId: "0wtsa0of",
    dataset: "production",
    apiVersion: "2023-05-20",
  });
  const todos = await client.fetch(feedQuery);
  res.status(200).json(todos);
}
