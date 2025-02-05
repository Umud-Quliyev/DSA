import logo from "../../assets/svg/8bf0d7d8.svg";
const Header = () => {
  return (
    <div className="flex justify-center items-center h-30 relative z-1 text-[#fff]">
      <div className="w-48">
        <img src={logo} alt="" className="text-[]"/>
      </div>
      <ul className="w-3/5 flex items-center justify-evenly ">
        <li>Əsas</li>
        <li>Müştərilər</li>
        <li>Təlim Proqramı</li>
        <li>Komandamız</li>
        <li>FAQ</li>
        <li>Əlaqə</li>
        <li>Təlimlər</li>
      </ul>
    </div>
  );
};

export default Header;
