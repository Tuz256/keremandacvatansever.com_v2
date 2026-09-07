import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";

const cookies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cookies" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    color: z.string().optional(),
    image: image(),
    ingredients: z.array(z.string()),
  }),
});

export const collections = {
  cookies,
};