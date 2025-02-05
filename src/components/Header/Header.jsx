import { Link } from "react-router-dom";
import logo from "../../assets/svg/8bf0d7d8.svg";
const Header = () => {
  return (
    <div className="flex justify-center items-center h-30  text-[#fff]">
      <div className="w-48">
        <img src={logo} alt="" className="text-[]" />
      </div>
      <ul className="w-3/5 flex items-center justify-evenly ">
        <Link to="">
          {" "}
          <li>Əsas</li>
        </Link>
        <Link to="">
          <li>Təlim Proqramı</li>
        </Link>
        <Link to="">
          <li>Komandamız</li>
        </Link>
        <Link to="">
          {" "}
          <li>FAQ</li>
        </Link>
        <Link to="">
          <li>Əlaqə</li>
        </Link>
        <Link to="">
          <li>Təlimlər</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
