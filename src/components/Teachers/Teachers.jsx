import { useEffect, useState } from "react";
import "./Teachers.css";
import { useTranslation } from "react-i18next";
import Popup from "../Popup/Popup";

const Teachers = () => {
  const [openModals, setOpenModals] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null); 

  const handleOpen = (index) => {
    setSelectedTeacher(teachers[index]); 

    setOpenModals({ ...openModals, [index]: true });
  };

  
  const handleClose = (index, event) => {
    if (event.target === event.currentTarget) {
      setOpenModals((prev) => ({ ...prev, [index]: false }));
    }
  };

  const { t } = useTranslation();

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await fetch(`${BASE_URL}/muellimler/`);

        if (!response.ok) {
          throw new Error("Error fetching training details");
        }

        const data = await response.json();
        setTeachers(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };

    fetchTeacher();
  }, [BASE_URL]);

  return (
    <>
      <div className="contanierr">
        <div className="teachers">
          <div className="teacher__title">
            <h2>{t("teachers.title")}</h2>
          </div>
          <div className="teacher__list">
            {teachers.map((teacher, index) => (
              <div
                onClick={() => handleOpen(index)}
                className="teacher__profile"
                key={index}
              >
                <div className="profile__img">
                  <img src={teacher.image} alt={teacher.name} />
                </div>
                <div className="profile__info">
                  <h3>{teacher.name}</h3>
                  <h5>{teacher.work_position}</h5>
                  <h5>
                    <span>{teacher.work_location}</span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedTeacher && openModals[teachers.indexOf(selectedTeacher)] && (
        <Popup
          teacher={selectedTeacher} 
          handleClose={handleClose} 
          index={teachers.indexOf(selectedTeacher)} 
        />
      )}
    </>
  );
};

export default Teachers;
