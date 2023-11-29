import React from "react";

import UzmanlikKart from "./UzmanlikKart";

const Uzmanlik = () => {
  const uzmanlik = [
    "aile",
    "ceza",
    "gayrimenkul",
    "icra",
    "is",
    "miras",
    "sirket",
    "yabancilar",
    "ceza",
  ];
  return (
    <section
      id="uzmanlik"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 md:mx-[7rem] my-[100px] h-full "
    >
      {uzmanlik.map((uzmanlik, index) => (
        <UzmanlikKart
          src={`/uzmanlik/${uzmanlik}.jpg`}
          alt={uzmanlik}
          key={index}
        />
      ))}
    </section>
  );
};

export default Uzmanlik;
