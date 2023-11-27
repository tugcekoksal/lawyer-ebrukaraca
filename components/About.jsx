import React from "react";
import { motion } from "framer-motion";
import { Translation } from "../Translation";

const About = () => {
  return (
    <>
      <section
        id="about"
        style={{ backgroundImage: "url('/about-background.jpg')" }}
        className="relative grid grid-cols-1 sm:grid-cols-2  justify-center bg-cover items-center m-6 md:m-[7rem]  shadow-2xl bg-center h-auto md:h-screen px-2 sm:px-[5rem] overflow-hidden "
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>

        <div className="relative flex-1 flex justify-center items-start flex-col  w-full h-full p-6  ">
          {" "}
          <h1 className="font-bold text-lg md:text-2xl uppercase py-10">
            Ebru Karaca Hukuk & Danismanlik
          </h1>
          <p className="text-lg leading-loose ">
            <Translation textKey="about" />
          </p>
        </div>
        <div className="flex-1 h-full flex justify-center items-center order-first sm:order-none ">
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
            className=" shadow-lg z-[9] w-2/4 sm:w-auto "
            style={{
              height: "auto",
              maxWidth: "265px",
              borderRadius: "50%",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default About;
