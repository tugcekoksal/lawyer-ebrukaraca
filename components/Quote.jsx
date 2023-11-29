import React from "react";
import { Translation } from "../Translation";

const Quote = () => {
  return (
    <div
      className="relative bg-fixed bg-cover h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/quote.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-[10] bg-white bg-opacity-20 shadow-lg sm:bg-opacity-10 p-4 sm:px-[100px]">
        <p className="text-white rounded-md italic text-3xl text-center py-4 sm:py-8">
          <Translation textKey="soz" />
        </p>
        <p className="text-white rounded-md italic text-xl text-center py-2 sm:py-4">
          - J.F.Kennedy
        </p>
      </div>
    </div>
  );
};

export default Quote;
