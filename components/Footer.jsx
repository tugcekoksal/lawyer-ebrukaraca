import React from "react";

const Footer = () => {
  return (
    <footer className="footer  text-white py-[5rem]">
      <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-auto mb-6 lg:mb-0">
          <img
            src="logo4.png"
            alt="Logo"
            className="w-[17rem] h-auto opacity-90"
          />
        </div>
        <div className="w-full lg:w-auto mb-6 lg:mb-0 max-w-xs text-center lg:text-left z-[10]">
          <h2 className="text-2xl font-bold mb-2">Adres</h2>
          <p className="text-lg">
            Fevzipaşa mah. Çarşı cad. Fatih sok. no:8 Daire:9 Merkez/ÇANAKKALE
          </p>
        </div>
        <div className="w-full lg:w-auto max-w-xs text-center lg:text-left z-10">
          <h2 className="text-2xl font-bold mb-2">İletişim</h2>
          <p className="text-lg">0507 576 79 59</p>
          <p className="text-lg">av.karacaebru@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
