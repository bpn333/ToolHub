import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const tools = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/tools",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    image: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = {
  tools,
};
