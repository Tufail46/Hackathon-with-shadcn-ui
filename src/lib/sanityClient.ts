import { createClient } from "next-sanity";

export const client = createClient({
  token: process.env.SANITY_ACCESS_TOKEN,
  apiVersion: "2023-06-06",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
});
