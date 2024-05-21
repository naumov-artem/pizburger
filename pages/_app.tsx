import type { AppProps } from "next/app";
import { BasketContextProvider } from "../src/BasketContext";
import "../src/app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketContextProvider>
      <Component {...pageProps} />
    </BasketContextProvider>
  );
}
