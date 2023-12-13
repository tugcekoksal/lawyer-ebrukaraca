import React from "react";
import { Translation } from "../Translation";
import SEO from "@/components/SEO";
import emailjs from "emailjs-com";
import { useState } from "react";

const Iletisim = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setError("");

    // Simple validation check
    if (
      !e.target.from_name.value ||
      !e.target.user_email.value ||
      !e.target.user_tel.value ||
      !e.target.message.value
    ) {
      setError("Lütfen tüm alanları doldurunuz.");
      return; // Stop the function if validation fails
    }

    try {
      const result = await emailjs.sendForm(
        "service_pzj24ye",
        "template_p1qsjlg",
        e.target,
        "ajNw8hHBtWDc-5DQT"
      );
      if (result.text === "OK") {
        setStatusMessage("E-posta başarıyla gönderildi.");
        e.target.reset(); // Reset form after successful submission
      } else {
        setStatusMessage("E-posta gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      setStatusMessage("E-posta gönderilirken bir hata oluştu.");
      console.error("E-posta gönderilirken bir hata oluştu:", error);
    }
  };

  const googleMapsEmbedLink =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7777330206663!2d26.4013338!3d40.147234499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xea2404e8b731039%3A0xc60848c18991d846!2sAvukat%20Ebru%20Karaca%20Hukuk%20ve%20Dan%C4%B1%C5%9Fmanl%C4%B1k!5e0!3m2!1str!2str!4v1702456088256!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <section>
      <SEO
        title="İletişim - Ebru Karaca Hukuk ve Danışmanlık"
        description="Ebru Karaca Hukuk ve Danışmanlık iletişim bilgileri."
        ogImage="/contact.jpg"
        ogUrl="http://www.ebrukaraca.av.tr/iletisim"
      />

      <div className="relative bg-cover bg-center  h-[400px] bg-[url('/contact.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute text-2xl sm:text-3xl md:text-4xl font-bold text-white left-8 sm:left-16 md:left-32 bottom-10 z-10">
          <Translation textKey="iletisim" />
        </h1>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/3 mb-6 lg:mb-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                <Translation textKey="telefon" />
              </h3>
              <p className="text-lg leading-normal">0507 576 79 59</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                E-MAIL
              </h3>
              <p className="text-lg leading-normal">av.karacaebru@gmail.com</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                <Translation textKey="adres" />
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
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-6">
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Ad Soyad  "
                  className="form-input mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                />
              </div>
              {/* Email Input */}
              <div className="mb-6">
                <input
                  id="email"
                  name="user_email"
                  placeholder="E-mail"
                  className="form-input mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                />
              </div>
              {/* Phone Number Input */}
              <div className="mb-6">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="user_tel"
                  placeholder="Telefon Numarası"
                  className="form-input mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                />
              </div>
              {/* Message Textarea */}
              <div className="mb-6">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Mesajınız"
                  className="form-textarea mt-1 block w-full border-0 border-b-2 border-gold-500 leading-relaxed"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full hover:text-white sm:w-auto border-gray-600 border text-gray-500 font-semibold py-2 px-6 rounded-full hover-bg-effect"
                >
                  <Translation textKey="gonder" />
                </button>
              </div>
            </form>
            {statusMessage && (
              <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
                {statusMessage}
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {error}
              </div>
            )}
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
