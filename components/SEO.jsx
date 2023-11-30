import React from "react";
import Head from "next/head";

const SEO = ({ title, description, ogImage, ogUrl }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content="Hukuk, Danışmanlık, Ebru Karaca , Çanakkale Avukat, Avukat, Çanakkale"
    />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:type" content="website" />
  </Head>
);

export default SEO;
