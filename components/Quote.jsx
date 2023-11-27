import React from "react";
import { Translation } from "../Translation";

const Quote = () => {
  return (
    <div className="bg-fixed bg-cover custom-bg h-[400px] flex items-center justify-center flex-col">
      <div className="bg-white bg-opacity-20 shadow-lg z-[10] sm:bg-opacity-10 px-2 sm:px-[100px]">
        <p className=" text-white rounded-md  italic text-3xl    py-8">
          <Translation textKey="soz" />
        </p>
        <p className=" text-white rounded-md italic text-xl text-center   py-4 ">
          - J.F.Kennedy
        </p>
      </div>
    </div>
  );
};

export default Quote;
