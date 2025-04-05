import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "transaction",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./transaction-history": "./components/transaction-history.tsx",
          "./new-transaction": "./components/new-transaction.tsx",
          "./update-transaction": "./update-transaction.tsx",
          "./transaction": "./components/transaction-details.tsx",
          "./transaction-store-provider": "./pages/store-provider.tsx",
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
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
