import { Link, Navigate, useNavigate } from "react-router-dom";

const PracticTable = () => {
const navigate = useNavigate()
  const data = [
    {
      id: 1,
      name: "Data Analitika",
      title: "Beginner to Intermediate",
      sections: [
        {
          id: 2,
          headers: "Excel ilə Data Analitikası",
        },
        {
          id: 3,
          headers: "Power BI ilə Data Analitikası",
        },
        {
          id: 4,
          headers: "SQL ilə Data Analitikası",
        },
        {
          id: 5,
          headers: "Tableau ilə Data Analitikası",
        },
        {
          id: 6,
          headers: "SPSS ilə Statistika və Data Analitikası",
        },
        {
          id: 7,
          headers: "R ilə Data Analitikası",
        },
      ],
    },
    {
      id: 8,
      name: "Data Science",
      title: "Beginner to Intermediate",
      sections: [
        {
          id: 9,
          headers: "Python ilə Data Analitikası",
        },
        {
          id: 10,
          headers: " Big Dataı",
        },
        {
          id: 11,
          headers: "Python ilə Dərin Öyrənmə",
        },
        {
          id: 12,
          headers: " SPSS ilə Data Hazırlanması və Maşın Öyrənməsi",
        },
        {
          id: 13,
          headers: "R ilə Maşın Öyrənməsi",
        },
        {
          id: 14,
          headers: "Python ilə Maşın Öyrənməsi",
        },
      ],
    },
  ];

  const clickHandler =(d)=>{
    navigate(`/telim/${d.id}`)
  }
  console.log(data, "data");
  return (
    <div className="absolute top-10 right-0 w-max bg-[#FFF] px-4 py-5  flex gap-10 flex-wrap rounded-[5px] z-10">
      {data.map((d) => (
        <div key={d.id}>
          <h1 className="text-[#2fa8a5] font-bold">{d.name}</h1>
          <p className="text-[#50264E] font-bold">{d.title}</p>
          <div className="flex flex-col">
            {d.sections.map((section) => (
              <span key={section.id} onClick={()=>clickHandler(section)} className="text-[#50264E] pr-3 transition  duration-300 ease hover:text-[#fccd00]  hover:bg-[#f8f9fb]">
                - {section.headers}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticTable;
