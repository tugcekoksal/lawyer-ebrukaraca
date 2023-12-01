import React from "react";
import { Translation } from "../Translation";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer text-white py-[5rem]">
      <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-between  text-left">
        <div className="w-full lg:w-auto mb-10 lg:mb-0 ">
          <Image
            src="/logo-beyaz.png"
            alt="Logo"
            width={272}
            height={68}
            className="opacity-90 mb-10 md:mb-0 scale-[1.2]"
          />
        </div>
        <div className="w-full lg:w-auto mb-6 lg:mb-0 max-w-xs  z-[10] leading-loose ">
          <h2 className="text-md md:text-xl font-bold mb-2">
            <Translation textKey="adres" />
          </h2>
          <p className="text-md md:text-lg max-w-[300px]   leading-loose">
            Fevzipaşa mah. Çarşı cad. Fatih sok. no:8 Daire:9 Merkez/ÇANAKKALE
          </p>
        </div>
        <div className="w-full lg:w-auto max-w-xs  text-left z-10 leading-relaxed">
          <h2 className="text-md md:text-xl font-bold mb-2">
            <Translation textKey="iletisim" />
          </h2>
          <div className="flex items-center justify-start gap-2 mb-2">
            <AiOutlinePhone className="text-lg" />
            <p className="text-md md:text-lg">0507 576 79 59</p>
          </div>
          <div className="flex items-center justify-start  gap-2">
            <AiOutlineMail className="text-md md:text-lg" />
            <p className="text-sm md:text-lg">av.karacaebru@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
