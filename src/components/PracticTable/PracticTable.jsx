import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PracticTable = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getBootcampData = async () => {
      try {
        const { data } = await axios.get(
          "https://dsabackend-production-00f4.up.railway.app/api/bootcamps/"
        );
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getBootcampData();
  }, []);
 
  return (
    <div className="practic__table   flex  flex-col gap-5 justify-center md:justify-between absolute top-14  right-11 sm:right-50 md:right-0  md:w-full  rounded-[5px] z-10   bg-[#FFF]">
      {data?.map((dat) => (
        <div key={dat.id} className="machine  flex  gap-5 md:gap-10">
            <h1 className="text-[#2fa8a5] font-bold cursor-pointer text-nowrap text-[2vw] sm:text-[1vw] md:text-[1.1vw]">
              {dat.name}
            </h1>
            <div className=" flex  flex-col  text-[#000000]">
              {dat?.bootcamp_tipi.map((d) => (
                <div key={d.id} className=" flex flex-col md:flex-row justify-between gap-1 md:gap-10  business">
                  <h2 className="text-[#50264E] text-[2vw] sm:text-[1vw] md:text-[1.1vw] font-bold cursor-pointer">
                    {d.name}
                  </h2>
                  <div className="">
                  {d?.telimler.map((t) => (
                    <div className="learning" key={t.id}>
                      <Link to={`/telim/${t.id}`} className="text-nowrap text-[#50264E] text-[2vw] sm:text-[1vw] md:text-[1.1vw] pr-3 transition duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb] px-1 cursor-pointer ">
                        {t.title}
                      </Link>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
      ))}
    </div>
  );
};

export default PracticTable;
/* sm:right-50 gap-1  md:flex-row md:top-15 md:left-150 mx-auto lg:w-max md:w-max   flex md:gap-10 flex-nowrap */