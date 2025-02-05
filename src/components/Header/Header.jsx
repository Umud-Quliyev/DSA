import logo from "../../assets/svg/8bf0d7d8.svg";
const Header = () => {
  return (
    <div className="px-0 flex bg-[red] w-full">
      <div className="w-48">

        <img src={logo} alt="" className="w-full"/>
      </div>
      <ul className="w-full flex justify-evenly">
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
