import sanity from "@/sanity/lib/client-config";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const query = `*[_type == "todo"] { _id, details, _createdAt, completed } | order(_createdAt desc) `;
    const data = await sanity.fetch(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
}
