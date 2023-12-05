import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { LanguageProvider } from "@/LanguageContext";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LanguageProvider>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Standard Meta Tags */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          {/* Primary Meta Tags */}
          <title>AVUKAT EBRU KARACA - HUKUK VE DANIŞMANLIK</title>
          <meta name="title" content="Ebru Karaca -  Hukuk ve Danışmanlık" />
          <meta
            name="description"
            content="Ebru Karaca hukuk bürosu Çanakkale ve çevre illerde güvenilir ve deneyimli hukuk danışmanlık hizmetleri sunar."
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
