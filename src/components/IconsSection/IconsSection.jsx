import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const IconsSection = () => {
  return (
    <>
      <NavLink
        to={"https://www.facebook.com/share/18dCBin8Y7/?mibextid=wwXIfr"}
        className="text-[20px] cursor-pointer"
      >
        <FaFacebook />
      </NavLink>
      <NavLink
        to={
          "https://www.instagram.com/datascienceacademy_?igsh=MWQ3M2Y5M3VuYmU5cw=="
        }
        className="text-[20px] cursor-pointer"
      >
        <FaInstagram />
      </NavLink>
      <NavLink
        to={
          "https://m.youtube.com/@dsaqssanalytics?fbclid=PAY2xjawIhJ4NleHRuA2FlbQIxMAABpq_1Srb7tuLShIwD-BTrOe9vayWU4gM0mnvbiLIDaMmX5pelx3XynJFofg_aem_SM8nv3tQ4WLd6ncgBdrlxg"
        }
        className="text-[20px] cursor-pointer"
      >
        <FaYoutube />
      </NavLink>
      <NavLink
        to={"https://wa.me/994773414340"}
        className="text-[20px] cursor-pointer"
      >
        <FaWhatsapp />
      </NavLink>
    </>
  );
};

export default IconsSection;
