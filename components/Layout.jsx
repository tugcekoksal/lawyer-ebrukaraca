import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UsefulLinksCarousel from "./UsefulLinksCarousel";
import { Analytics } from "@vercel/analytics/react";
const Layout = ({ children }) => {
  const linksData = [
    {
      name: "Yargitay",
      url: "https://www.yargitay.gov.tr/",
      imageUrl: "/images/yargitay.png",
    },
    {
      name: "Türkiye Barolar Birliği",
      url: "https://www.barobirlik.org.tr/",
      imageUrl: "/images/barolar-birligi-logo.png",
    },
    {
      name: "Anayasa Mahkemesi",
      url: "https://www.anayasa.gov.tr/tr/kararlar-bilgi-bankasi/",
      imageUrl: "/images/anayasa-mahkemesi.png",
    },
    {
      name: "Adalet Bakanlığı",
      url: "hhttps://www.adalet.gov.tr/",
      imageUrl: "/images/adalet-bakanligi.png",
    },
    {
      name: "Canakkale Barosu",
      url: "https://www.barobirlik.org.tr/",
      imageUrl: "/images/canakkale-barosu.png",
    },
    {
      name: "Mevzuat bilgi Sistemi",
      url: "https://www.mevzuat.gov.tr/",
      imageUrl: "/images/mevzuat-bilgi-sistemi.png",
    },
    {
      name: "Danistay",
      url: "https://www.danistay.gov.tr/",
      imageUrl: "/images/danistay.png",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        {children}
        <UsefulLinksCarousel links={linksData} />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
