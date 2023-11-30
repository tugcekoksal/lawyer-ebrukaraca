import React from "react";
import { Translation } from "../Translation";
import SEO from "@/components/Seo";

const Iletisim = () => {
  const googleMapsEmbedLink =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.711854819001!2d26.397612975979015!3d40.1487017719089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9c8988fb14d%3A0x2377ac1869fc308f!2zRmV2emlwYcWfYSwgw4dhcsWfxLEgQ2QuIE5vOjggRDo5LCAxNzAwMCDDh2FuYWtrYWxlIE1lcmtlei_Dh2FuYWtrYWxlLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sfr!4v1701091864577!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <section>
      <SEO
        title="İletişim - Ebru Karaca Hukuk ve Danışmanlık"
        description="Ebru Karaca Hukuk ve Danışmanlık iletişim bilgileri."
 
        ogImage="/contact.jpg"
        ogUrl="http://www.ebrukaraca.av.tr/iletisim"
      />

      <div className="relative bg-cover bg-center bg-fixed h-[400px] bg-[url('/contact.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute text-2xl sm:text-3xl md:text-4xl font-bold text-white left-8 sm:left-16 md:left-32 bottom-10 z-10">
          <Translation textKey="iletisim" />
        </h1>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/3 mb-6 lg:mb-0">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 leading-snug">
                Telefon
              </h3>
              <p className="text-lg leading-normal">0507 576 79 59</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 leading-snug">
                E-mail
              </h3>
              <p className="text-lg leading-normal">av.karacaebru@gmail.com</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 leading-snug">
                Adres
              </h3>
              <p className="text-lg leading-normal">
                Fevzipaşa mah. Çarşı cad. Fatih sok. no:8 Daire:9
                Merkez/ÇANAKKALE
              </p>
            </div>
            <div className="flex space-x-4">
              {/* Insert Social Media Icons here */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-10 lg:absolute lg:bottom-10 lg:right-[7rem] bg-white py-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 leading-tight">
              <Translation textKey="mesaj" />
            </h2>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Ad Soyad  "
                  className="form-input mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="form-input mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  placeholder="Telefon Numarası"
                  className="form-input mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Mesajınız"
                  className="form-textarea mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto border-gray-600 border text-gray-500 font-semibold py-2 px-6 rounded-full"
                >
                  <Translation textKey="gonder" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Google Map Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="w-full h-64 sm:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Maps Location"
            src={googleMapsEmbedLink}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Iletisim;
