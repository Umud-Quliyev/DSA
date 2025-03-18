import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import IconsSection from "../IconsSection/IconsSection";
import { t } from "i18next";

const Sidebar = ({
  data,
  activeSection,
  handleClick,
  handleCloseMenu,
  isLocation,
}) => {
  return (
    <div  className={`${data}  md:w-0`}>
      <ul className="md:hidden h-[100vh] text-nowrap text-[3vw] flex flex-col items-center gap-5 py-20">
        <span
          className="absolute top-[30px] right-[20px] text-[20px]"
          onClick={handleCloseMenu}
        >
          <IoClose />
        </span>

        {isLocation ? (
          <>
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
          </>
        ) : (
          <>
            <NavLink to="/">{t("nav.main")}</NavLink>
            <NavLink to="/">{t("nav.customer")}</NavLink>
            <NavLink to="/">{t("nav.training")}</NavLink>
            <NavLink to="/">{t("nav.team")}</NavLink>
            <NavLink to="/">{t("nav.faq")}</NavLink>
            <NavLink to="/">{t("nav.contact")}</NavLink>
          </>
        )}

        <li
          onClick={handleClick}
          className="flex items-center gap-1 relative hover:text-[#fccd00] cursor-pointer"
        >
          {t("nav.trainings")}
          <IoMdArrowDropdown />
        </li>
        <div className="flex flex-wrap w-full  justify-center gap-3 sm:gap-5 px-2">
          <IconsSection />
        </div>
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  activeSection: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  isLocation: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
};

export default Sidebar;
