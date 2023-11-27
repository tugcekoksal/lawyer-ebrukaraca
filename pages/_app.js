import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { LanguageProvider } from "@/LanguageContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
