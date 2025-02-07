import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticTable = () => {
const navigate = useNavigate()

const [course, setCourse] = useState(null)

useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios("http://localhost:3000/data");
        setCourse(data)
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
  
    fetchData();
  }, []);  
console.log(course, "course")
  

  const clickHandler =(d)=>{
    navigate(`/telim/${d.id}`)
  }
  return (
    <div className="absolute top-10 right-0 w-max bg-[#FFF] px-4 py-5  flex gap-10 flex-wrap rounded-[5px] z-10">
      {course?.map((d) => (
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
