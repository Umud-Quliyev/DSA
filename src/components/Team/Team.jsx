import React from "react";
import "./Team.css";
import etibar from "../../assets/img/etibarm.jpg";
import minure from "../../assets/img/minure.jpg";
import behruz from "../../assets/img/behruz.jpg";

const Team = () => {
  const teachers = [
    {
      img: etibar,
      fullname: "Etibar Hüseynli",
      position: "Chief Data Scientist",
      workplace: "QSS Analytics",
    },
    {
      img: minure,
      fullname: "Minurə Hüseynli",
      position: "Head of Data Analytics and Reporting",
      workplace: "Digital Umbrella",
    },
    {
      img: behruz,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: minure,
      fullname: "Minurə Hüseynli",
      position: "Head of Data Analytics and Reporting",
      workplace: "Digital Umbrella",
    },
  ];
  return (
    <div className="contanierr">
      <div className="team">
        <div className="teachers">
          <div className="teacher__title">
            <h2>Təlimçilərimiz</h2>
          </div>
          <div className="teacher__list">
            {teachers.map((teacher, index) => (
              <div className="teacher__profile" key={index}>
                <div className="profile__img">
                  <img src={teacher.img} alt={teacher.fullname} />
                </div>
                <div className="profile__info">
                  <h3>{teacher.fullname}</h3>
                  <h5>{teacher.position}</h5>
                  <h5>
                    <span>{teacher.workplace}</span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
