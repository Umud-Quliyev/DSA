import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticTable = () => {
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainingsRes = await fetch(`${BASE_URL}/bootcamps/`);
        const trainingsData = await trainingsRes.json();
        setTrainings(trainingsData);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const clickHandler = (telim) => {
    navigate(`/telim/${telim.id}`);
  };

  return (
    <div className="practic__table absolute bottom-0 right-20 gap-1 flex-col md:flex-row md:top-10 md:right-0 w-max bg-[#FFF] px-4 py-5 flex md:gap-10 flex-wrap rounded-[5px] z-10">
      {trainings.map((training) => (
        <div key={training.id}>
          <h1 className="text-[#2fa8a5] font-bold text-[2.5vw] md:text-[1.1vw]">
            {training.name}
          </h1>

          {training.bootcamp_tipi.map((info) => (
            <div key={info.id}>
              <p className="text-[#50264E] font-bold text-[2.5vw] md:text-[1.1vw]">
                {info.name}
              </p>

              <div className="flex flex-col">
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
                  <p className="text-gray-500 text-sm">Bu bootcampdə təlim mövcud deyil.</p>
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
