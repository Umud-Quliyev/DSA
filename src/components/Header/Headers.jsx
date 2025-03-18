import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/svg/8bf0d7d8.svg";
import logoBlack from "../../assets/svg/logoBlack.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PracticTable from "../PracticTable/PracticTable";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import IconsSection from "../IconsSection/IconsSection";
import { t } from "i18next";
const Headers = () => {
  const [activeSection, setActiveSection] = useState("");
  const [currentScroll, setCurrentScroll] = useState(0);
  const [chooseScroll, setChooseScroll] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const location = useLocation();
  const isLocation = location.pathname === "/";
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
        setChooseScroll(true);
        setDropdown(false);
      } else {
        setChooseScroll(false);
      }
      setCurrentScroll(scroll);
    };

    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [currentScroll]);

  useEffect(() => {
    if (!isLocation) {
      setBgColor(true);
      setActiveSection("");
      setDropdown(false);
    } else {
      setBgColor(false);
      setDropdown(false);
      window.scroll(0, 0);
    }
  }, [isLocation]);

  const handleClick = () => {
    setDropdown(!dropdown);
  };
  const handleCloseMenu = () => {
    setOpen(false);
    setDropdown(false);
  };
  return (
    <div
      className={`${
        chooseScroll ? "scrolled" : bgColor ? "bgColor" : ""
      } flex items-center justify-between px-5 md:px-0 md:justify-evenly w-full h-20 nav`}
    >
      {isLocation ? (
        <>
          <div className="w-30 md:w-30 lg:w-40">
            <img
              src={chooseScroll ? logoBlack : logo}
              alt="logo"
              className="w-full"
            />
          </div>
          <ul className="text-nowrap hidden md:flex items-center  gap-5 xl:gap-10 ">
            <Link
              to="main"
              smooth={true}
              duration={1500}
              className={`${
                activeSection === "main" ? "active" : ""
              } hover:text-[#fccd00] cursor-pointer`}
            >
              {t("nav.main")}
            </Link>
            <Link
              to="customer"
              smooth={true}
              duration={1500}
              className={`${
                activeSection === "customer" ? "active" : ""
              } hover:text-[#fccd00] cursor-pointer`}
            >
              {t("nav.customer")}
            </Link>
            <Link
              to="training"
              smooth={true}
              duration={1500}
              className={`${
                activeSection === "training" ? "active" : ""
              } hover:text-[#fccd00] cursor-pointer`}
            >
              {t("nav.training")}
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={1500}
              className={`${
                activeSection === "team" ? "active" : ""
              } hover:text-[#fccd00] cursor-pointer`}
            >
              {t("nav.team")}
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={1500}
              className={`${
                activeSection === "faq" ? "active" : ""
              } hover:text-[#fccd00] cursor-pointer`}
            >
              {t("nav.faq")}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              className={`${
                activeSection === "contact" ? "active" : ""
              } hover:text-[#fccd00] cursor-pointer`}
            >
              {t("nav.contact")}
            </Link>
            <li
              onClick={handleClick}
              className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
            >
              {t("nav.trainings")}
              <IoMdArrowDropdown />
            </li>
          </ul>
        </>
      ) : (
        <>
          <NavLink to={"/"} className="w-30 md:w-30 lg:w-40">
            <img
              src={chooseScroll ? logoBlack : logo}
              alt="logo"
              className="w-full"
            />
          </NavLink>
          <ul className="text-nowrap hidden md:flex items-center  gap-5 xl:gap-10 ">
            <NavLink to="/">{t("nav.main")}</NavLink>
            <NavLink to="/">{t("nav.customer")}</NavLink>
            <NavLink to="/">{t("nav.training")}</NavLink>
            <NavLink to="/">{t("nav.team")}</NavLink>
            <NavLink to="/">{t("nav.faq")}</NavLink>
            <NavLink to="/">{t("nav.contact")}</NavLink>
            <li
              onClick={handleClick}
              className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
            >
              {t("nav.trainings")}
              <IoMdArrowDropdown />
            </li>
          </ul>
        </>
      )}
      <div className="hidden lg:flex flex-wrap items-center gap-4">
        <IconsSection />
      </div>
      <AiOutlineMenu
        className={`${open ? "hidden" : ""} block md:hidden`}
        onClick={() => setOpen(true)}
      />
      {open ? (
        <Sidebar
          data={"sidebar"}
          activeSection={activeSection}
          isLocation={isLocation}
          handleClick={handleClick}
          handleCloseMenu={handleCloseMenu}
        />
      ) : (
        <Sidebar
          data={"close"}
          activeSection={activeSection}
          isLocation={isLocation}
          handleClick={handleClick}
          handleCloseMenu={handleCloseMenu}
        />
      )}
      {dropdown && <PracticTable />}
    </div>
  );
};

export default Headers;
