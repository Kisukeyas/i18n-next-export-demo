import type { AppProps } from "next/app";
import "../i18n/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
