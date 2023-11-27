import React from "react";
import ArticlesGrid from "@/components/ArticleGrid";
import { Translation } from "../Translation";

const makale = () => {
  return (
    <div>
      <div
        className="relative w-full h-[400px]"
        style={{
          backgroundImage: 'url("/article.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
          backgroundPosition: "center -80px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute left-[7rem] bottom-10 text-white font-bold text-3xl z-[9] ">
          <Translation textKey="makale" />
        </h1>
      </div>
      <div className="my-10">
        <ArticlesGrid />
      </div>
    </div>
  );
};

export default makale;
