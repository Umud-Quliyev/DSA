import React from "react";
import logo from "../../assets/svg/logoBlack.svg";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaPhoneFlip, FaPhoneVolume } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
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
                placeholder="Email daxil edin"
                className="w-full"
              />
              <button>Abone ol</button>
            </div>
          </div>
            <div className="flex justify-evenly w-full  py-3">
              <div className="flex items-center gap-3">
              <FaPhoneVolume />
                <div>
                  <p>Əlaqə telefon</p>
                  <p>077 341 43 40</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
              <IoIosMail />
                <div>
                  <p>Poçt Ünvanı</p>
                  <p>example@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
              <FaLocationDot />

                <div>
                  <p>Ünvan</p>
                  <p>Aşıq Alı 2A, Baku, Azerbaijan</p>
                </div>
              </div>
           
          </div>
        </div>
        <div className="footer__bottom">
          <div className="languages">
            <ul>
              <li className="language__active">Azərbaycan</li>
              <li>English</li>
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
