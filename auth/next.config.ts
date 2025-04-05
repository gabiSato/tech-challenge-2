import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "auth",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./user-login-modal": "./components/user-login-modal.tsx",
          "./user-register-modal": "./components/user-register-modal.tsx",
          "./authentication-store-provider": "./pages/store-provider.tsx",
        },
        remotes: {
          shell: `shell@http://localhost:4000/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        shared: {
          tailwindcss: { singleton: true },
          clsx: { singleton: true },
          "react-toastify": { singleton: true },
        },
        extraOptions: {},
      })
    );

    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};

export default nextConfig;
