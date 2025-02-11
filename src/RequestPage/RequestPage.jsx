const RequestPage = () => {
  return (
    <section className=" pt-30 request">
      <div className="w-5/6 mx-auto  ">
        <h2 className=" text-[2.61vw] text-center font-[300] text-[#212331]">
          Müraciət
        </h2>
        <form
          action=""
          className="my-10 flex flex-wrap justify-evenly gap-3 mx-auto "
        >
          <div className="w-[49%]">
            <input
              type="text"
              placeholder="Ad:"
              className="w-full py-3 border-b-1 outline-none "
              required
            />
          </div>
          <div className="w-[49%]">
            <input
              type="text"
              placeholder="Soyad:"
              className="w-full py-3 border-b-1 outline-none"
              required
            />
          </div>
          <div className="w-[49%]">
            <input
              type="text"
              placeholder="Email:"
              className="w-full py-3 border-b-1 outline-none"
              required
            />
          </div>
          <div className="w-[49%]">
            <input
              type="text"
              placeholder="Əlaqə nömrəsi:"
              className="w-full py-3 border-b-1 outline-none"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#28aaa8] text-[#fff] font-bold py-3  mt-5 rounded-[30px] cursor-pointer transition  duration-300 ease-in-out hover:bg-[#e2195b]">
            GÖNDƏR
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestPage;
