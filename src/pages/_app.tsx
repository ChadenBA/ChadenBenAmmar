import type { AppProps } from "next/app";
import "@/styles/globals.css"; // only once
import { ThemeProvider } from "@/theme/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}