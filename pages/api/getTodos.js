import sanity from "@/sanity/lib/client-config";

const feedQuery = `
    *[_type == "todo"] {
    _id,
    _createdAt,
    details,
    completed,
    } | order(_createdAt desc)
`;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, must-revalidate");
  const todos = await sanity.fetch(feedQuery);
  res.status(200).json(todos);
}
