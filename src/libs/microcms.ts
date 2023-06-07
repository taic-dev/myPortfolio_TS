import { createClient } from 'microcms-js-sdk';
import type { 
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});
 
export const getSkills = async (limit=100, offset=0) => {
  const data = await client.get({ 
    endpoint: "skills",
    queries: {
      offset,
      limit
    }
  });

  return data;
}

export const getWorks = async () => {
  const data = await client.get({ endpoint: "works" });
  return data;
}