import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ui/button": "./components/ui/button.tsx",
          "./ui/checkbox": "./components/ui/checkbox.tsx",
          "./ui/container": "./components/ui/container.tsx",
          "./ui/input": "./components/ui/input.tsx",
          "./ui/loader": "./components/ui/loader.tsx",
          "./ui/modal": "./components/ui/modal.tsx",
          "./ui/select": "./components/ui/select.tsx",
        },
        remotes: {
          auth: `auth@http://localhost:4001/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          transaction: `transaction@http://localhost:4002/_next/static/${
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
