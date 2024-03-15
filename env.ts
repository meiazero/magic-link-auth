import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    RESEND_API_KEY: z.string().min(1),
    TOKEN_SEED: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_URL: z.string().url().min(1),
  },
  shared: {
    VERCEL_ENV: z
      .enum(["production", "preview", "development"])
      .default("development"),
  },
  runtimeEnv: {
    TOKEN_SEED: process.env.TOKEN_SEED,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
});
