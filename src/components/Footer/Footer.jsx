import React from "react";
import logo from "../../assets/svg/logoBlack.svg";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
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
              <li className="language__active">Azərbaycan</li>
              <li>English</li>
              <li>French</li>
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
