import type { SanityImageAssetDocument } from "@sanity/client";
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  useCdn: false,
  apiVersion: "2022-01-31",
};

export const imageBuilder = (source: SanityImageAssetDocument) =>
  createImageUrlBuilder(config).image(source);

export const client = createClient(config);
