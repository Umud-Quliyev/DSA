import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/svg/logoBlack.svg";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";

import "./Footer.css";
import i18n from "../i18n";

const Footer = () => {
  const { t } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language || "az");

  const smoothScrollToTop = () => {
    const scrollStep = window.scrollY / 50;
    const scrollAnimation = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
    smoothScrollToTop();
  };

  return (
    <div className="contanierr">
      <div className="footer__container">
        <div className="footer">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex justify-between w-full">
            <div className="subscribe w-full py-2">
              <input
                type="text"
                placeholder={t("footer.subscribePlaceholder")}
                className="w-full"
              />
              <button>{t("footer.subscribeButton")}</button>
            </div>
          </div>
          <div className="flex justify-evenly w-full py-3">
            <div className="flex items-center gap-3">
              <FaPhoneVolume className="text-[#28aaa8]"/>
              <div>
                <p className="font-bold">{t("footer.contactPhone")}</p>
                <p>077 341 43 40</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IoIosMail className="text-[#28aaa8]"/>
              <div>
                <p className="font-bold">{t("footer.contactEmail")}</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#28aaa8]"/>
              <div>
                <p className="font-bold">{t("footer.contactAddress")}</p>
                <p>Aşıq Alı 2A, Baku, Azerbaijan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="languages">
            <ul>
              <li
                onClick={() => changeLanguage("az")}
                className={activeLang === "az" ? "language__active" : ""}
              >
                Azərbaycan
              </li>
              <li
                onClick={() => changeLanguage("en")}
                className={activeLang === "en" ? "language__active" : ""}
              >
                English
              </li>
            </ul>
          </div>
          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
          {/* <div className="copyright">
            <p>
              {new Date().getFullYear()} {t("footer.rightsReserved")}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
