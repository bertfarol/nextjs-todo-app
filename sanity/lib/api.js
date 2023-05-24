import { groq } from "next-sanity";
import sanity from "./client-config";

const API_URL = "https://0wtsa0of.api.sanity.io/v2023-05-20"; // Replace with your Sanity API URL
const API_TOKEN =
  "skokvaZL3QoYr8vyJdUBAbDeqgiLBECbgBfLZg1GhQw2o5OXvtFg4ik7MADJg0Vmz3hgnxvJBWoW2zvI6UOzYmcmPpazommpuIY4CJvNxTcm4AZqBNuRsbIT7qfvABkbqYphjVEBP8KZlS9uaxmRHpMg829PUyG4tfcF7LO8yWpV4UFgBgRn"; // Replace with your Sanity API token

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_TOKEN}`,
  cache: "no-store",
  next: {
    revalidate: 5,
  },
};

export async function getAllData() {
  const query = groq`
    *[_type == "todo"] {
    _id,
    _createdAt,
    details,
    completed,
    } | order(_createdAt desc)
  `;

  const data = await sanity.fetch(query, { next: { revalidate: 5 } });

  return data;
}

export async function getItemById(itemId) {
  try {
    const response = await fetch(`${API_URL}/production/todo/${itemId}`, {
      headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching item: ${error.message}`);
  }
}

export async function createItem(itemData) {
  try {
    const response = await fetch(`${API_URL}/production/todo`, {
      method: "POST",
      headers,
      body: JSON.stringify(itemData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error creating item: ${error.message}`);
  }
}

export async function deleteItem(itemId) {
  const mutations = [{ delete: { id: itemId } }];

  try {
    const response = fetch(`${API_URL}/data/mutate/production`, {
      headers,
      method: "post",
      body: JSON.stringify({ mutations }),
    });
    return response;
  } catch (error) {
    throw new Error("Error deleting data");
  }
}

// export async function deleteItem(itemId) {
//   const mutations = [{ delete: { id: itemId } }];

//   fetch(`${API_URL}/data/mutate/production`, {
//     headers,
//     method: "post",
//     body: JSON.stringify({ mutations }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// }
