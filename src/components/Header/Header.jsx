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
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [color, setColor] = useState(false);
  const [chooseScroll, setChooseScroll] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false)
  const location = useLocation();
  const isLocation = location.pathname === "/";

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
        className={`flex justify-between px-10 items-center  h-[70px] md:justify-center nav  ${
          chooseScroll ? "scrolled" : bgColor ? "bgColor" : ""
        } `}
      >
        {isLocation ? (
          <div className="w-40 cursor-pointer">
            <img src={color ? logoBlack : logo} alt="logo" />
          </div>
        ) : (
          <NavLink to={"/"} className="w-40 cursor-pointer">
            <img src={color ? logoBlack : logo} alt="logo" />
          </NavLink>
        )}

        <ul className="w-full text-nowrap hidden  items-center justify-evenly  md:flex">
          {isLocation ? (
            <>
              <Link to="main" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "main" ? "active" : ""
                  }`}
                >
                  Əsas
                </li>
              </Link>
              <Link to="customer" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "customer" ? "active" : ""
                  }`}
                >
                  Müştərilər
                </li>
              </Link>
              <Link to="training" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "training" ? "active" : ""
                  }`}
                >
                  Təlim Proqramı
                </li>
              </Link>
              <Link to="team" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "team" ? "active" : ""
                  }`}
                >
                  Komandamız
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
                  Əlaqə
                </li>
              </Link>
            </>
          ) : (
            <>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">Əsas</li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  Müştərilər
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  Təlim Proqramı
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  Komandamız
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">FAQ</li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">Əlaqə</li>
              </NavLink>
            </>
          )}

          <li
            className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
            onClick={handleClick}
          >
            Təlimlər <IoMdArrowDropdown />
            {dropdown && <PracticTable />}
          </li>
        </ul>

        <div className="hidden  items-center gap-4 lg:flex">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaWhatsapp />
        </div>
        <AiOutlineMenu className={`${open ? "hidden" : ""} block md:hidden`} onClick={()=>setOpen(true)}/>
          {
            open ? (<div className="sidebar w-[35%] md:w-0">
               <ul className="md:hidden h-[100vh] text-nowrap text-[3vw] flex flex-col items-center gap-5 py-20">
                <span className="absolute top-[20px] right-[50px]" onClick={()=>setOpen(false)}><IoClose /></span>
          {isLocation ? (
            <>
              <Link to="main" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "main" ? "active" : ""
                  }`}
                >
                  Əsas
                </li>
              </Link>
              <Link to="customer" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "customer" ? "active" : ""
                  }`}
                >
                  Müştərilər
                </li>
              </Link>
              <Link to="training" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "training" ? "active" : ""
                  }`}
                >
                  Təlim Proqramı
                </li>
              </Link>
              <Link to="team" smooth={true} duration={1500}>
                <li
                  className={`hover:text-[#fccd00] cursor-pointer ${
                    activeSection === "team" ? "active" : ""
                  }`}
                >
                  Komandamız
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
                  Əlaqə
                </li>
              </Link>
            </>
          ) : (
            <>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">Əsas</li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  Müştərilər
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  Təlim Proqramı
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">
                  Komandamız
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">FAQ</li>
              </NavLink>
              <NavLink to="/">
                <li className="hover:text-[#fccd00] cursor-pointer">Əlaqə</li>
              </NavLink>
            </>
          )}

          <li
            className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
            onClick={handleClick}
          >
            Təlimlər <IoMdArrowDropdown />
            {dropdown && <PracticTable />}
          </li>
        <div className="  items-center flex gap-5">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaWhatsapp />
        </div>
        </ul>
            </div>) : ""
          }
      </div>
    </>
  );
};

export default Header;
