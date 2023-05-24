import { updateItem } from "@/sanity/lib/api";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { id, details, completed } = req.body;

    await updateItem(id, details, completed);

    return res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating data" });
  }
}
