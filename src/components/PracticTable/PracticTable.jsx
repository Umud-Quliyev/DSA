import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticTable = () => {
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainingsRes = await fetch("http://localhost:3000/trainings");
        const trainingsData = await trainingsRes.json();

        const sectionsRes = await fetch("http://localhost:3000/sections");
        const sectionsData = await sectionsRes.json();

        const mergedData = trainingsData.map((training) => ({
          ...training,
          sections: sectionsData.filter(
            (sec) => Number(sec.trainingId) === Number(training.id)
          ),
        }));

        setTrainings(mergedData);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const clickHandler = (section) => {
    navigate(`/telim/${section.id}`);
  };

  return (
    <div className="practic__table absolute bottom-0 right-30 gap-1 flex-col md:flex-row md:top-10 md:right-0 w-max  bg-[#FFF]  px-4 py-5 flex md:gap-10 flex-wrap rounded-[5px] z-10">
      {trainings.map((training) => (
        <div key={training.id}>
          <h1 className="text-[#2fa8a5] font-bold text-[2vw] md:text-[1.1vw]">{training.name}</h1>
          <p className="text-[#50264E] font-bold text-[2vw] md:text-[1.1vw]">{training.title}</p>
          <div className="flex flex-col">
            {training.sections.map((section) => (
              <span
                key={section.id}
                onClick={() => clickHandler(section)}
                className="text-[#50264E] text-[2vw] md:text-[1.1vw] pr-3 transition duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb] p-1"
              >
                - {section.headers?.az}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticTable;
