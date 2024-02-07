import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"

import { env } from "./env.mjs"
import { withSVGr } from "./scripts/withSVGr.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withSVGr(
  withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
    reactStrictMode: true,
    experimental: { instrumentationHook: true },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: "attachment",
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    rewrites() {
      return [
        { source: "/healthz", destination: "/api/health" },
        { source: "/api/healthz", destination: "/api/health" },
        { source: "/health", destination: "/api/health" },
        { source: "/ping", destination: "/api/health" },
      ]
    },
  })
)

export default config
