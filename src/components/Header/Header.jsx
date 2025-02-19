import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/8bf0d7d8.svg";
import logoBlack from "../../assets/svg/logoBlack.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";
import PracticTable from "../PracticTable/PracticTable";
import { useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [color, setColor] = useState(false);
  const [chooseScroll, setChooseScroll] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLocation = location.pathname === "/";

  const { t } = useTranslation();

  useEffect(() => {
    if (!isLocation) {
      setBgColor(true);
      setActiveSection("");
    } else {
      setBgColor(false);
      setDropdown(false);
    }
  }, [isLocation]);
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "main",
        "customer",
        "training",
        "team",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    if (isLocation) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLocation]);

  useEffect(() => {
    const handleNavigation = () => {
      const scroll = window.scrollY;

      if (scroll > 50) {
        setColor(true);
        setChooseScroll(true);
        setDropdown(false);
      } else {
        setColor(false);
        setChooseScroll(false);
      }
      setCurrentScroll(scroll);
    };

    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [currentScroll]);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div
        className={`flex  px-5 items-center justify-between sm:px-10 sm:justify-between  h-[70px] md:justify-center nav  ${
          chooseScroll ? "scrolled" : bgColor ? "bgColor" : ""
        } `}
      >
        {isLocation ? (
          <div className=" w-30 md:w-40 cursor-pointer">
            <img src={color ? logoBlack : logo} alt="logo" />
          </div>
        ) : (
          <NavLink to={"/"} className="w-40 cursor-pointer">
            <img src={color ? logoBlack : logo} alt="logo" />
          </NavLink>
        )}

        <ul className="w-full text-nowrap hidden  items-center  md:flex md:justify-evenly">
          {isLocation ? (
            <>
              <Link to="main" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "main" ? "active" : ""
                  }`}
                >
                  {t("nav.main")}
                </li>
              </Link>
              <Link to="customer" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "customer" ? "active" : ""
                  }`}
                >
                  {t("nav.customer")}
                </li>
              </Link>
              <Link to="training" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "training" ? "active" : ""
                  }`}
                >
                  {t("nav.training")}
                </li>
              </Link>
              <Link to="team" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "team" ? "active" : ""
                  }`}
                >
                  {t("nav.team")}
                </li>
              </Link>
              <Link to="faq" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "faq" ? "active" : ""
                  }`}
                >
                  FAQ
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                >
                  {t("nav.contact")}
                </li>
              </Link>
            </>
          ) : (
            <>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  {t("nav.main")}
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  {t("nav.customer")}
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  {t("nav.training")}
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  {t("nav.team")}
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">FAQ</li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  {t("nav.contact")}
                </li>
              </NavLink>
            </>
          )}

          <li
            className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
            onClick={handleClick}
          >
            {t("nav.trainings")} <IoMdArrowDropdown />
            {dropdown && <PracticTable />}
          </li>
        </ul>

        <div className="hidden text-[20px] items-center gap-4  lg:flex">
          <NavLink
            to={
              "https://www.facebook.com/groups/1433534440051100/?ref=share&mibextid=NSMWBT"
            }
          >
            <FaFacebook />
          </NavLink>
          <NavLink
            to={
              "https://www.instagram.com/datascienceacademy_?igsh=MWQ3M2Y5M3VuYmU5cw=="
            }
          >
            <FaInstagram />
          </NavLink>
          <NavLink
            to={
              "https://m.youtube.com/@dsaqssanalytics?fbclid=PAY2xjawIhJ4NleHRuA2FlbQIxMAABpq_1Srb7tuLShIwD-BTrOe9vayWU4gM0mnvbiLIDaMmX5pelx3XynJFofg_aem_SM8nv3tQ4WLd6ncgBdrlxg"
            }
          >
            <FaYoutube />
          </NavLink>
          <NavLink to={"https://wa.me/994773414340"}>
            <FaWhatsapp />
          </NavLink>
        </div>
        <AiOutlineMenu
          className={`${open ? "hidden" : ""} block md:hidden`}
          onClick={() => setOpen(true)}
        />
        {open ? (
          <div className="sidebar w-[35%] md:w-0">
            <ul className="md:hidden h-[100vh] text-nowrap text-[3vw] flex flex-col items-center gap-5 py-20">
              <span
                className="absolute top-[20px] right-[10px] text-[20px]"
                onClick={() => setOpen(false)}
              >
                <IoClose />
              </span>
              {isLocation ? (
                <>
                  <Link to="main" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "main" ? "active" : ""
                      }`}
                    >
                      {t("nav.main")}
                    </li>
                  </Link>
                  <Link to="customer" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "customer" ? "active" : ""
                      }`}
                    >
                      {t("nav.customer")}
                    </li>
                  </Link>
                  <Link to="training" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "training" ? "active" : ""
                      }`}
                    >
                      {t("nav.training")}
                    </li>
                  </Link>
                  <Link to="team" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "team" ? "active" : ""
                      }`}
                    >
                      {t("nav.team")}
                    </li>
                  </Link>
                  <Link to="faq" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "faq" ? "active" : ""
                      }`}
                    >
                      FAQ
                    </li>
                  </Link>
                  <Link to="contact" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "contact" ? "active" : ""
                      }`}
                    >
                      {t("nav.contact")}
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.main")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.customer")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.training")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.team")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">FAQ</li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.contact")}
                    </li>
                  </NavLink>
                </>
              )}

              <li
                className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
                onClick={handleClick}
              >
                {t("nav.trainings")} <IoMdArrowDropdown />
                {dropdown && <PracticTable />}
              </li>
              <div className="  items-center flex-wrap  gap-5 justify-center flex px-3">
                <div className="text-[20px]">
                  <FaFacebook />
                </div>
                <div className="text-[20px]">
                  <FaInstagram />
                </div>
                <div className="text-[20px]">
                  <FaLinkedin />
                </div>
                <div className="text-[20px]">
                  <FaWhatsapp />
                </div>
              </div>
            </ul>
          </div>
        ) : (
          <div className="close w-[35%] md:w-0">
            <ul className="md:hidden h-[100vh] text-nowrap text-[3vw] flex flex-col items-center gap-5 py-20">
              <span
                className="absolute top-[20px] right-[10px] text-[20px]"
                onClick={() => setOpen(false)}
              >
                <IoClose />
              </span>
              {isLocation ? (
                <>
                  <Link to="main" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "main" ? "active" : ""
                      }`}
                    >
                      {t("nav.main")}
                    </li>
                  </Link>
                  <Link to="customer" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "customer" ? "active" : ""
                      }`}
                    >
                      {t("nav.customer")}
                    </li>
                  </Link>
                  <Link to="training" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "training" ? "active" : ""
                      }`}
                    >
                      {t("nav.training")}
                    </li>
                  </Link>
                  <Link to="team" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "team" ? "active" : ""
                      }`}
                    >
                      {t("nav.team")}
                    </li>
                  </Link>
                  <Link to="faq" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "faq" ? "active" : ""
                      }`}
                    >
                      FAQ
                    </li>
                  </Link>
                  <Link to="contact" smooth={true} duration={1500}>
                    <li
                      className={`hover:text-[#fccd00] cursor-pointer ${
                        activeSection === "contact" ? "active" : ""
                      }`}
                    >
                      {t("nav.contact")}
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.main")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.customer")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.training")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.team")}
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">FAQ</li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="hover:text-[#fccd00] cursor-pointer">
                      {t("nav.contact")}
                    </li>
                  </NavLink>
                </>
              )}

              <li
                className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
                onClick={handleClick}
              >
                {t("nav.trainings")} <IoMdArrowDropdown />
                {dropdown && <PracticTable />}
              </li>
              <div className="  items-center flex-wrap  gap-5 justify-center flex px-3">
                <div className="text-[20px]">
                  <FaFacebook />
                </div>
                <div className="text-[20px]">
                  <FaInstagram />
                </div>
                <div className="text-[20px]">
                  <FaLinkedin />
                </div>
                <div className="text-[20px]">
                  <FaWhatsapp />
                </div>
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
