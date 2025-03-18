import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "./Footer.css";
import i18n from "../i18n";
import { FlagIcon } from "react-flag-kit";
import IconsSection from "../IconsSection/IconsSection";
import { FaPhoneVolume } from "react-icons/fa";
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
          <div className="flex justify-between  w-full py-3 address">
            <div className="flex items-center gap-3 sub-address">
              <FaPhoneVolume className="text-[#28aaa8]" />
              <div>
                <p className="font-bold">{t("footer.contactPhone")}</p>
                <p>(+994)77 341 43 40</p>
                <p>(+994)51 341 43 40</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sub-address">
              <IoIosMail className="text-[#28aaa8]" />
              <div>
                <p className="font-bold">{t("footer.contactEmail")}</p>
                <p>info@dsa.az</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sub-address">
              <FaLocationDot className="text-[#28aaa8]" />
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
                className={`flex items-center p-2 gap-2 ${
                  activeLang === "az" ? "language__active" : ""
                }`}
              >
                <FlagIcon code="AZ" />
                Azərbaycan
              </li>
              <li
                onClick={() => changeLanguage("en")}
                className={`flex items-center p-2 gap-2 ${
                  activeLang === "en" ? "language__active" : ""
                }`}
              >
                <FlagIcon code="GB" />
                English
              </li>
            </ul>
          </div>
          <div className="socials">
            <IconsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
