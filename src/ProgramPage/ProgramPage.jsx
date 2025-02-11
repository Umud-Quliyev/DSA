const ProgramPage = () => {
  return (
    <section className="">
      <div className="w-5/6 mx-auto flex flex-col items-center justify-start">
        <h2 className="text-[2.61vw] font-[300]">Təlim proqramı</h2>
        <span className="text-[#28aaa8] text-[1.31vw]">
          Təlim Proqramını Yükləmək Üçün Zəhmət Olmasa Emailinizi Daxil Edin
        </span>
        <form action="" className="w-5/6">
          <input
            type="text"
            placeholder="Email:"
            className="border-b-1 w-full py-3 outline-none"
          />
          <button type="submit" className="w-full bg-[#28aaa8] text-[#fff] font-bold py-3  mt-5 rounded-[30px] cursor-pointer transition  duration-300 ease-in-out hover:bg-[#e2195b]">
            GÖNDƏR
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProgramPage;
