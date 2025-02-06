import { Link } from "react-router-dom";
import logo from "../../assets/svg/8bf0d7d8.svg";
import logoBlack from "../../assets/svg/logoBlack.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [color, setColor] = useState(false);
  const [chooseScroll, setChooseScroll] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
 

  useEffect(() => {
    const handleNavigation = () => {
      const scroll = window.scrollY;

      if (scroll > 100) {
        setColor(true); 
        setChooseScroll(true); 
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
        chooseScroll ? "scrolled" : "scrollUp"
      }`}
    >
      <div className="w-40">
        {color ? (
          <img src={logoBlack} alt="" />
        ) : (
          <img src={logo} alt="" className="" />
        )}
      </div>
      <ul className="w-3/5 flex items-center justify-evenly ">
        <Link to="">
          {" "}
          <li className="hover:text-[#fccd00]">Əsas</li>
        </Link>
        <Link to="">
          <li className="hover:text-[#fccd00]">Təlim Proqramı</li>
        </Link>
        <Link to="">
          <li className="hover:text-[#fccd00]">Komandamız</li>
        </Link>
        <Link to="">
          {" "}
          <li className="hover:text-[#fccd00]">FAQ</li>
        </Link>
        <Link to="">
          <li className="hover:text-[#fccd00]">Əlaqə</li>
        </Link>
        <Link to="">
          <li
            className="flex items-center gap-1 relative hover:text-[#fccd00]"
            onClick={handleClick}
          >
            Təlimlər <IoMdArrowDropdown />
            {dropdown && (
              <div className="absolute top-10 right-0 w-max bg-[#FFF] px-4 py-5  flex gap-10 flex-wrap rounded-[5px]">
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
