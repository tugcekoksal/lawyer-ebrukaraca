import Uzmanlik from "@/components/Uzmanlik";
import React from "react";
import { Translation } from "../Translation";
import SEO from "@/components/SEO";

const uzmanlik = () => {
  return (
    <section>
      <SEO
        title="Uzmanlık Alanlarımız - Ebru Karaca Hukuk ve Danışmanlık"
        description="Ebru Karaca Hukuk ve Danışmanlık uzmanlık alanlarımız"
        ogImage="/uzmanlik.jpg"
        ogUrl="http://www.ebrukaraca.av.tr/uzmanlik"
      />
      <div
        className="relative w-full h-[400px] bg-cover bg-center "
        style={{
          backgroundImage: 'url("/uzmanlik.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute left-6 md:left-[7rem] bottom-10 text-white font-bold text-3xl z-[9] ">
          <Translation textKey="uzmanlik" />
        </h1>
      </div>
      <Uzmanlik numberOfCards={9} col={3} />
    </section>
  );
};

export default uzmanlik;
