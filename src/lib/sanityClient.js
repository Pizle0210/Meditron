import { createClient } from "@sanity/client";

export default createClient({
  projectId: "d9y70zdq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-03-08",
});
