import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import AuthenticationStoreProvider from "auth/authentication-store-provider";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationStoreProvider>
      <Component {...pageProps} />
    </AuthenticationStoreProvider>
  );
}
