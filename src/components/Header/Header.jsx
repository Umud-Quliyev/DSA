import { Link, Element } from 'react-scroll';
import logo from "../../assets/svg/8bf0d7d8.svg";
import logoBlack from "../../assets/svg/logoBlack.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [color, setColor] = useState(false);
  const [chooseScroll, setChooseScroll] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "customer", "training", "team", "faq", "contact"];
      const scrollPosition = window.scrollY;
  
      sections.map((section) => {
        const el = document.getElementById(section);
        console.log(el,"el")
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleNavigation = () => {
      const scroll = window.scrollY;

      if (scroll > 50) {
        setColor(true); 
        setChooseScroll(true);
        setDropdown(false) 
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
    <div
      className={`flex justify-center items-center h-20  text-[#fff] nav z-10 ${
        chooseScroll ? "scrolled" : ""
      }`}
    >
      <div className="w-40">
        {color ? (
          <img src={logoBlack} alt="" className='cursor-pointer'/>
        ) : (
          <img src={logo} alt="" className="cursor-pointer" />
        )}
      </div>
      <ul className="w-3/5 flex items-center justify-evenly ">
        <Link to="main" smooth={true} duration={1500}>
          {" "}
          <li className={`hover:text-[#fccd00] cursor-pointer ${activeSection == "main" ? "active" : ""}`}>Əsas</li>
        </Link>
        <Link to="customer" smooth={true} duration={1500}>
          {" "}
          <li className={`hover:text-[#fccd00] cursor-pointer ${activeSection == "customer" ? "active" : ""}`}>Müştərilər</li>
        </Link>
        <Link to="training" smooth={true} duration={1500} >
          <li className={`hover:text-[#fccd00] cursor-pointer ${activeSection == "training" ? "active" : ""} `}>Təlim Proqramı</li>
        </Link>
        <Link to="team" smooth={true} duration={1500}>
          <li className={`hover:text-[#fccd00] cursor-pointer ${activeSection == "team" ? "active" : ""}`} >Komandamız</li>
        </Link>
        <Link to="faq" smooth={true} duration={1500}>
          {" "}
          <li className={`hover:text-[#fccd00] cursor-pointer ${activeSection == "faq" ? "active" : ""}`}>FAQ</li>
        </Link>
        <Link to="contact" smooth={true} duration={1500}>
          <li className={`hover:text-[#fccd00] cursor-pointer ${activeSection == "contact" ? "active" : ""}`}>Əlaqə</li>
        </Link>
        <Link to="">
          <li
            className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
            onClick={handleClick}
          >
            Təlimlər <IoMdArrowDropdown />
            {dropdown && (
              <div className="absolute top-10 right-0 w-max bg-[#FFF] px-4 py-5  flex gap-10 flex-wrap rounded-[5px] z-10">
                <div>
                  <h1 className="text-[#2fa8a5] font-bold">Data Analitika</h1>
                  <p className="text-[#50264E] font-bold">
                    Beginner to Intermediate
                  </p>
                  <div className="flex flex-col">
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00]  hover:bg-[#f8f9fb]">
                      - Excel ilə Data Analitikası
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - Power BI ilə Data Analitikası
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - SQL ilə Data Analitikası
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - Tableau ilə Data Analitikası
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - SPSS ilə Statistika və Data Analitikası
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - R ilə Data Analitikası
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#2fa8a5] font-bold">Data Science</h1>
                  <p className="text-[#50264E] font-bold">
                    Beginner to Intermediate
                  </p>
                  <div className="flex flex-col">
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - Python ilə Data Analitikası
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - Big Data
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - Python ilə Dərin Öyrənmə
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - SPSS ilə Data Hazırlanması və Maşın Öyrənməsi
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - R ilə Maşın Öyrənməsi
                    </Link>
                    <Link className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb]">
                      - Python ilə Maşın Öyrənməsi
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
