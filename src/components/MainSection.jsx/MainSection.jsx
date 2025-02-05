
const MainSection = () => {
  return (
    <div className="bg-[url(./assets/png/main-bg.jpg)] h-[100vh] flex items-center justify-center absolute top-0 left-0 w-full" >
      <div className="text-[#fff] flex  flex-col items-center gap-2">
        <h1 className="text-[40px]">12 HƏFTƏDƏ</h1>
        <h2 className="text-[60px] font-extrabold" >Data Scientist Olmaq?</h2>
        <div className="bg-[#310d31] rounded-[10px] flex flex-col items-center  h-auto" style={{padding: "10px 20px" }}>
            <p className="text-[#cf9751]">Data Science Academy</p>
            <h3 className="text-[#fecb00] text-[50px] font-extrabold">Bootcamp</h3>
            <p className="text-[30px] font-bold">1 Fevral 2025</p>
        </div>
        <span className="text-center">En müasir tədris proqramı, <br/> real biznes layihələri və fərdi <br/> karyera dəstəyi əsasında <br/> bizimlə mümkündür!</span>
      <div className="flex gap-5 mx-auto bg-[red]  w-3/5">
        <button className="bg-[#2baaaa] rounded-[20px] w-2/5" >MURACIƏT ET</button>
        <button className="bg-[#2baaaa] rounded-[20px]" >PROQRAMI YÜKLƏ</button>
      </div>
      </div>
    </div>
  );
};

export default MainSection;
