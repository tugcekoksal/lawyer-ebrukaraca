import React from "react";
import ArticlesGrid from "@/components/ArticleGrid";
import { Translation } from "../Translation";
import SEO from "@/components/SEO";

const makale = () => {
  return (
    <section>
      <SEO
        title="Makaleler - Ebru Karaca Hukuk ve Danışmanlık"
        description="Avukat Ebru Karaca Makaleler "
        ogImage="/article.jpg"
        ogUrl="http://www.ebrukaraca.av.tr/makale"
      />
      <div
        className="relative w-full h-[400px] bg-center bg-cover"
        style={{
          backgroundImage: 'url("/article.jpg")',
          // backgroundAttachment: "fixed",
          // backgroundSize: "100% 100%",
          // backgroundPosition: "center -80px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute left-6 md:left-[7rem] bottom-10 text-white font-bold text-3xl z-[9] ">
          <Translation textKey="makale" />
        </h1>
      </div>
      <div className="my-10">
        <ArticlesGrid />
      </div>
    </section>
  );
};

export default makale;
