import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const TopBar = () => {
  const phoneNumber = "905075767959";
  const preFilledMessage = encodeURIComponent(
    "Merhaba, bir konuda danışmanlık almak istiyorum"
  );
  return (
    <div className="hidden md:flex px-10 z-[120] bg-[#414040] text-white text-sm py-2  md:justify-between items-center">
      <div className="flex items-center space-x-4">
        <a
          href="tel:+90 (507) 576 79 59"
          className="flex items-center space-x-1 hover:text-gray-300"
        >
          <FaPhone className="w-4 h-4" />
          <span>+90 (507) 576 79 59</span>
        </a>
        <a
          href="mailto:info@egin.av.tr"
          className="flex items-center space-x-1 hover:text-gray-300"
        >
          <FaEnvelope className="w-4 h-4" />
          <span>av.karacaebru@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>

        <a
          href={`https://wa.me/${phoneNumber}?text=${preFilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#b1976c] hover:bg-[#443c2f] text-white py-1 px-3 rounded-full text-xs font-semibold"
        >
          WHATSAPP
        </a>
      </div>
    </div>
  );
};

export default TopBar;
