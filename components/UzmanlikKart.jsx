import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Translation } from "../Translation";

const UzmanlikKart = ({ src, name, id }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className=" relative group shadow-lg hover:shadow-2xl rounded-sm hover:border border-[#22161e] overflow-hidden  "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={{
        hidden: { opacity: 0, y: 95 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.25 }}
    >
      {" "}
      <Image
        src={src}
        alt={name}
        width={500}
        height={500}
        objectFit="cover"
        className={`w-full h-full transition-transform ${
          hovered ? "duration-1000 transform scale-110" : "duration-1000"
        }`}
      />
      <div className="absolute inset-0 flex flex-col bg-black bg-opacity-30 items-center justify-center ">
        <div className=" group-hover:bg-black group-hover:bg-opacity-50 w-full text-center">
          {" "}
          <p className="text-xl font-bold   text-white p-10   ">
            <Translation textKey={name} />
          </p>
          <a
            href={`/uzmanlik/${id}`}
            className="inline-block text-xs font-semibold text-white uppercase hover:text-blue-800 mr-2 mb-2 "
          >
            Detaylar &raquo;
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default UzmanlikKart;
