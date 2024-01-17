import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  client: {
    NEXT_PUBLIC_GITHUB_REPO: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
  },
})
