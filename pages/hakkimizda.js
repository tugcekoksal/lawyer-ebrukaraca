import React from "react";
import { Translation } from "../Translation";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const hakkimizda = () => {
  return (
    <section id="hakkimizda" className=" ">
      <SEO
        title="Hakkımızda - Ebru Karaca Hukuk ve Danışmanlık"
        description="Ebru Karaca Hukuk ve Danışmanlık hakkında bilgiler."
        ogImage="/hakkinda.jpg"
        ogUrl="http://www.ebrukaraca.av.tr/hakkimizda"
      />

      <div
        className="relative w-full h-[400px] bg-cover bg-center "
        style={{
          backgroundImage: 'url("/hakkinda.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute left-6 md:left-[7rem] bottom-10 text-white font-bold text-3xl z-[9] ">
          <Translation textKey="hakkimizda" />
        </h1>
      </div>
      <section
        id="about"
        className="relative grid grid-cols-1 sm:grid-cols-2  justify-center bg-cover items-center m-6 md:m-[7rem]   bg-center   overflow-hidden "
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="relative flex-1 flex justify-center items-start flex-col  w-full h-full  ">
          {" "}
          <h1 className="font-bold text-2xl uppercase py-10 ">
            <Translation textKey="baslik" />
          </h1>
          <p className="text-lg leading-loose">
            <Translation textKey="about" />
          </p>
        </div>
        <div className="flex-1 h-full flex justify-center items-center  ">
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.3, delay: 0.25 }}
            src="/profil.png"
            alt=""
            className=" shadow-lg z-[9] w-2/4 sm:w-auto mt-6 lg:mt-0"
            style={{
              height: "auto",
              maxWidth: "265px",
              borderRadius: "50%",
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default hakkimizda;
