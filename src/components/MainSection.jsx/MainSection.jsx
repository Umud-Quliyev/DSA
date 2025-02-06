import Header from "../Header/Header";

const MainSection = () => {
  return (
    <section id="main" name="main" className="bg-[url(./assets/png/main-bg.jpg)] h-[100vh] w-full">
      <Header />
      <div className="text-[#fff] flex  flex-col items-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 ">
          <h1 className="text-[60px] font-[200]">12 Həftədə</h1>
          <h2 className="text-[60px]  font-bold">Data Scientist Olmaq?</h2>
        <div className="bg-[#310d31] rounded-[10px] flex flex-col items-center  p-4">
          <span className="text-[#ffca05] text-[20px]">
            Data Science Academy
          </span>
          <h3 className="text-[#ffca05] text-[40px] font-extrabold ">BOOTCAMP</h3>
          <span className="text-[30px] font-bold">1 Fevral 2025</span>
        </div>
        <span className="text-center text-[18px]">
          En müasir tədris proqramı, <br /> real biznes layihələri və fərdi{" "}
          <br /> karyera dəstəyi əsasında <br /> bizimlə mümkündür!
        </span>
        <div className="flex gap-5 mx-auto pt-3">
          <button className="bg-[#2baaaa] rounded-[20px] p-3  w-50 hover:bg-transparent cursor-pointer">
            MURACIƏT ET
          </button>
          <button className="bg-[#2baaaa] rounded-[20px] p-3 w-50 hover:bg-transparent cursor-pointer">
            PROQRAMI YÜKLƏ
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
