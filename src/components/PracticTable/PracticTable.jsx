import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PracticTable = () => {
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getBootcampData = async () => {
      try {
        const trainingsRes = await fetch(`${BASE_URL}/bootcamps/`);
        let trainingsData = await trainingsRes.json();

        trainingsData = trainingsData
          .filter((training) => training.is_active)
          .sort((a, b) => a.order - b.order);

        trainingsData.forEach((training) => {
          training.bootcamp_tipi = training.bootcamp_tipi
            .filter((tip) => tip.is_active)
            .sort((a, b) => a.order - b.order);

          training.bootcamp_tipi.forEach((tip) => {
            tip.telimler = tip.telimler
              .filter((telim) => telim.is_active)
              .sort((a, b) => a.order - b.order);
          });
        });

        setTrainings(trainingsData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getBootcampData();
  }, [BASE_URL]);

  const clickHandler = (telim) => {
    const metinlerId = telim.metinler_ids?.[0];
    if (metinlerId) {
      navigate(`/telim/${metinlerId}`);
      window.scrollTo(0, 0);
    } else {
      console.warn("Metinler ID bulunamadı:", telim);
    }
  };

  

  return (
    <div className="practic__table   overflow-y-auto max-h-[60vh] md:h-max  absolute top-20 right-35 sm:right-15 gap-5 flex flex-col md:flex-row  md:flex-wrap   md:top-15  md:right-[50px] xl:right-[230px]  lg:right-[200px] w-max bg-[#FFF] px-5 py-4  rounded-[5px] z-10">
      {loading
        ? [...Array(3)].map((_, index) => (
            <div key={index} className="w-[300px]">
              <Skeleton
                animation="wave"
                variant="text"
                width="80%"
                height={24}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="70%"
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="90%"
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="60%"
                height={20}
              />
            </div>
          ))
        : trainings.map((training) => (
            <div key={training.id} className=" flex flex-col">
              <div className="text-[#2fa8a5]">
                <h1 className="text-[#2fa8a5] font-bold text-[2.5vw] md:text-[1.1vw]">
                  {training.name}
                </h1>
              </div>
              {training.bootcamp_tipi.map((info) => (
                <div key={info.id} className="flex  flex-col ">
                  <p className="text-[#50264E] font-bold text-[2.5vw] md:text-[1.1vw]">
                    {info.name}
                  </p>

                  <div className="flex flex-col  ">
                    {info.telimler.length > 0 ? (
                      info.telimler.map((telim) => (
                        <span
                          key={telim.id}
                          onClick={() => clickHandler(telim)}
                          className="text-[#50264E] text-[2.4vw] md:text-[1.1vw] pr-3 transition duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb] p-1 cursor-pointer"
                        >
                          - {telim.title}
                        </span>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        Bu bootcampdə təlim mövcud deyil.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
    </div>
  );
};

export default PracticTable;

