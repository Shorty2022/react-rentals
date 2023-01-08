import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionUser } from "../types";
import { createContext } from "react";
import { NextIntlProvider } from "next-intl";
import Header from "../components/header";

// Define context for a SessionUser
export let Session: React.Context<SessionUser>;

export default function App({ Component, pageProps }: AppProps) {
  
  Session = createContext(pageProps.sessionUser);

  return (
    <Session.Provider value={pageProps.sessionUser}>
      <NextIntlProvider messages={pageProps.messages} locale="en">
        <Header />
        <Component {...pageProps} />
      </NextIntlProvider>
    </Session.Provider>
  );
}
