import React from "react";
import logo from "../../assets/svg/logoblack.svg";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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
          <ul>
            <Link to="main" smooth={true} duration={1500}>
              <li>Əsas</li>
            </Link>
            <Link to="customer" smooth={true} duration={1500}>
              <li>Müştərilər</li>
            </Link>
            <Link to="training" smooth={true} duration={1500}>
              <li>Təlim Proqramı</li>
            </Link>
            <Link to="team" smooth={true} duration={1500}>
              <li>Komandamız</li>
            </Link>
            <Link to="faq" smooth={true} duration={1500}>
              <li>FAQ</li>
            </Link>
            <Link to="contact" smooth={true} duration={1500}>
              <li>Əlaqə</li>
            </Link>
          </ul>
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
