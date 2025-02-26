import  { useEffect, useState } from "react";
import "./Teachers.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";

const Teachers = () => {
  const [openModals, setOpenModals] = useState({});
  const [teachers, setTeachers] = useState([]);

  const handleOpen = (index) => {
    setOpenModals({ ...openModals, [index]: true });
  };

  const handleClose = (index) => {
    setOpenModals({ ...openModals, [index]: false });
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
      } finally {
      }
    };

    fetchTeacher();
  }, []);

  return (
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

              <Modal
                open={openModals[index] || false}
                onClose={() => handleClose(index)}
                disableEscapeKeyDown={false}
              >
                <Box className="modal-content">
                  <div className="teacher__info">
                    <div className="fullname">
                      <h4>{teacher.name}</h4>
                    </div>
                    <div className="desc">
                      <p>{teacher.info}</p>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
