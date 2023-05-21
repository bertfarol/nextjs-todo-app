import { groq } from "next-sanity";
import { client } from "./config/client-config";

export async function getTodos() {
  return client.fetch(`*[_type == "todo"]`);
  // return client.fetch(
  //   groq`*[_type == "todo"] {
  //   _id,
  //   details,
  //   "slug": slug.current,
  //   _createdAt
  //   } | order(_createdAt desc)`
  // );
}
