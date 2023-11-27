import React from "react";
import { Translation } from "../Translation";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer text-white py-[5rem]">
      <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-auto mb-6 lg:mb-0">
          <img
            src="logo4.png"
            alt="Logo"
            className="w-[17rem] h-auto opacity-90 mb-10 md:mb-0"
          />
        </div>
        <div className="w-full lg:w-auto mb-6 lg:mb-0 max-w-xs text-center lg:text-left z-[10]">
          <h2 className="text-md md:text-xl font-bold mb-2">
            <Translation textKey="adres" />
          </h2>
          <p className="text-sm md:text-lg">
            Fevzipaşa mah. Çarşı cad. Fatih sok. no:8 Daire:9 Merkez/ÇANAKKALE
          </p>
        </div>
        <div className="w-full lg:w-auto max-w-xs text-center lg:text-left z-10">
          <h2 className="text-md md:text-xl font-bold mb-2">
            <Translation textKey="iletisim" />
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <AiOutlinePhone className="text-lg" />
            <p className="text-sm md:text-lg">0507 576 79 59</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <AiOutlineMail className="text-sm md:text-lg" />
            <p className="text-sm md:text-lg">av.karacaebru@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
