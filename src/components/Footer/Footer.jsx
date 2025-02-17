import React, { useState } from "react";
import logo from "../../assets/svg/logoBlack.svg";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";
import i18n from "../i18n";

const Footer = () => {
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
          <div className="subscribe">
            <input type="text" placeholder="Email daxil edin" />
            <button>Abone ol</button>
          </div>
          <div className="informations">
            <p>
              <span>
                <IoMdMail />
              </span>
              blablabla@gmail.com
            </p>
            <p>
              <span>
                <FaPhone />
              </span>{" "}
              0550505050{" "}
            </p>
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
              <li
                onClick={() => changeLanguage("fr")}
                className={activeLang === "fr" ? "language__active" : ""}
              >
                French
              </li>
            </ul>
          </div>
          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
          <div className="copyright">
            <p>{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
