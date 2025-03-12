import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PracticTable = () => {
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openStates, setOpenStates] = useState({});  
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
    navigate(`/telim/${telim.metinler}`);
    window.scrollTo(0, 0);
  };

  const handleTrainingToggle = (trainingId) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [trainingId]: !prevState[trainingId],
    }));
  };

  const handleBootcampTipiToggle = (trainingId, tipId) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [`${trainingId}-${tipId}`]: !prevState[`${trainingId}-${tipId}`], 
    }));
  };

  return (
    <div  className="practic__table absolute    top-65   right-25  sm:top-80 sm:right-50 gap-1 md:top-15 xl:right-[220px] lg:right-[200px] md:right-[50px] w-max bg-[#FFF] px-5 py-4 rounded-[5px]">
      {trainings?.map((training) => {
        const isTrainingOpen = openStates[training.id];  
        return (
          <div key={training.id} className="md:flex  justify-between flex-row-reverse ">
            <div
              className="text-[#2fa8a5]"
              onClick={() => handleTrainingToggle(training.id)}
            >
              <h1 className="flex items-center font-bold text-[2.5vw] md:text-[1.1vw]">
              {isTrainingOpen ?   <IoMdArrowDropleft /> : <IoMdArrowDropdown />}  
                {training.name}
              </h1>
            </div>
            {isTrainingOpen && (
              <div>
                {training.bootcamp_tipi.map((info) => {
                  const isBootcampTipiOpen = openStates[`${training.id}-${info.id}`];
                  return (
                    <div key={info.id}>
                      <div
                        className="flex flex-col"
                        onClick={() => handleBootcampTipiToggle(training.id, info.id)}
                      >
                        <p className="flex items-center text-[#50264E] font-bold text-[2.5vw] md:text-[1.1vw]">
                          {isBootcampTipiOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropleft />}
                          {info.name}
                        </p>
                      </div>
                      {isBootcampTipiOpen && (
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
                            <p className="text-gray-500 text-sm">
                              Bu bootcampdə təlim mövcud deyil.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PracticTable;




 /* <div className="practic__table absolute -bottom-150 right-5 sm:right-15 gap-1 flex  flex-wrap flex-col  md:top-10  md:right-[-50px]  w-max bg-[#FFF] px-5 py-4  rounded-[5px] z-10">
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
            <div key={training.id} className=" flex flex-col gap-10">
              <div
                className=" text-[#2fa8a5]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <h1 className="flex items-center flex-wrap text-[#2fa8a5] font-bold text-[2.5vw] md:text-[1.1vw]">
                  <IoMdArrowDropdown />
                  {training.name}
                </h1>
                </div>
                {isOpen &&
                  training.bootcamp_tipi.map((info) => (
                    <div key={info.id} className=" flex bg-[green] ">
                      <p className="text-[#50264E] font-bold text-[2.5vw] md:text-[1.1vw]">
                        {info.name}
                      </p>

                      <div className="flex flex-col bg-[red] ">
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
    </div> */