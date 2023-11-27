import Uzmanlik from "@/components/Uzmanlik";
import React from "react";
import { Translation } from "../Translation";

const uzmanlik = () => {
  return (
    <div>
      <div
        className="relative w-full h-[400px]"
        style={{
          backgroundImage: 'url("/uzmanlik.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center -180px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute left-[7rem] bottom-10 text-white font-bold text-3xl z-[9] ">
          <Translation textKey="uzmanlik" />
        </h1>
      </div>
      <Uzmanlik />
    </div>
  );
};

export default uzmanlik;
