import React, { useState } from "react";
import "./Teachers.css";
import etibar from "../../assets/img/etibarm.jpg";
import minure from "../../assets/img/minure.jpg";
import behruz from "../../assets/img/behruz.jpg";
import emil from "../../assets/img/emil.png";
import turgut from "../../assets/img/turgut.jpg";
import ehmed from "../../assets/img/ehmed.jpg";
import celal from "../../assets/img/celal.jpg";
import sebnur from "../../assets/img/sebnur.jpg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Teachers = () => {
  const [openModals, setOpenModals] = useState({});

  const handleOpen = (index) => {
    setOpenModals({ ...openModals, [index]: true });
  };

  const handleClose = (index) => {
    setOpenModals({ ...openModals, [index]: false });
  };

  const teachers = [
    {
      img: etibar,
      fullname: "Etibar Hüseynli",
      position: "Chief Data Scientist",
      workplace: "QSS Analytics",
      desc: "Minurə Hüseynli data sahəsində professional olaraq 8 ildən artıq iş təcrübəsinə sahibdir. Hal-hazırda Digital Umbrella şirkətində Data Analytics və Reporting şöbəsinin rəhbəri vəzifəsində çalışır. Fərqli sektorlar üzrə bir çox yerli və beynəlxalq data science layihələrində məsləhətçi olaraq çalışmışdır. Layihələrin icrası zamanı 10 nəfərə qədər komandalara rəhbərlik etmişdir. Hal-hazırda bir neçə şirkət üçün data science xidmətləri göstərir. Advanced statistics, Python ilə machine learning, SQL ilə dataların idarə olunması, Tableau və digər BI proqramlarla vizual analitika, datadan stratejik informasiyaların əldə olunması üzrə geniş praktiki biliklərə sahibdir.",
    },
    {
      img: minure,
      fullname: "Minurə Hüseynli",
      position: "Head of Data Analytics and Reporting",
      workplace: "Digital Umbrella",
      desc: "Minurə Hüseynli data sahəsində professional olaraq 8 ildən artıq iş təcrübəsinə sahibdir. Hal-hazırda Digital Umbrella şirkətində Data Analytics və Reporting şöbəsinin rəhbəri vəzifəsində çalışır. Fərqli sektorlar üzrə bir çox yerli və beynəlxalq data science layihələrində məsləhətçi olaraq çalışmışdır.",
    },
    {
      img: behruz,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
      desc: "Bəhruz Qasımov hal-hazırda 'Paşa Bank'da 'Məlumatların keyfiyyəti və təminatının idarə edilməsi' üzrə baş mütəxəssis olaraq çalışır. Həmçinin, TuranBank ASC, Yapı Kredi Bank Azərbaycan, Unbank kimi şirkətlərdə data sahəsində çalışmış və 14 ildən artıq peşəkar iş təcrübəsinə malikdir.",
    },
    {
      img: emil,
      fullname: "Emil Mirzəyev",
      position: "Süni intellekt və Strateji Qərarqəbuletmə Researcher",
      workplace: "University College London",
      desc: "Dr. Emil Mirzəyev İqtisadiyyat və Biznes Administrasiyası üzrə ikili fəlsəfə elmləri doktoru (PhD) dərəcəsinə sahibdir və hal-hazırda dünyanın top universitetlərindən biri olan University College London-da Süni intellekt və Strateji Qərarqəbuletmə sahələrinin kəsişməsində elmi araşdırma ilə məşğuldur. Python və Data Science ilə 10 ilə yaxın təcrübəsi var və öz işlərini MIT, Harvard və LBS kimi nüfuzlu universitetlərdə, hebelə çoxsaylı beynəlxalq konfranslarda təqdim etmişdir. Azərbaycanda da ML, AI ilə bağlı mövzularda çoxsaylı pulsuz vörkşoplar keçmişdir.",
    },
    {
      img: turgut,
      fullname: "Turqut Abdullayev",
      position: "Süni intellekt və Strateji Qərarqəbuletmə Researcher",
      workplace: "University College London",
      desc: "Dr. Emil Mirzəyev İqtisadiyyat və Biznes Administrasiyası üzrə ikili fəlsəfə elmləri doktoru (PhD) dərəcəsinə sahibdir və hal-hazırda dünyanın top universitetlərindən biri olan University College London-da Süni intellekt və Strateji Qərarqəbuletmə sahələrinin kəsişməsində elmi araşdırma ilə məşğuldur. Python və Data Science ilə 10 ilə yaxın təcrübəsi var və öz işlərini MIT, Harvard və LBS kimi nüfuzlu universitetlərdə, hebelə çoxsaylı beynəlxalq konfranslarda təqdim etmişdir. Azərbaycanda da ML, AI ilə bağlı mövzularda çoxsaylı pulsuz vörkşoplar keçmişdir.",
    },
    {
      img: ehmed,
      fullname: "Əhməd Əhmədov",
      position: "Senior Data Scientist",
      workplace: "University College London",
      desc: "Dr. Emil Mirzəyev İqtisadiyyat və Biznes Administrasiyası üzrə ikili fəlsəfə elmləri doktoru (PhD) dərəcəsinə sahibdir və hal-hazırda dünyanın top universitetlərindən biri olan University College London-da Süni intellekt və Strateji Qərarqəbuletmə sahələrinin kəsişməsində elmi araşdırma ilə məşğuldur. Python və Data Science ilə 10 ilə yaxın təcrübəsi var və öz işlərini MIT, Harvard və LBS kimi nüfuzlu universitetlərdə, hebelə çoxsaylı beynəlxalq konfranslarda təqdim etmişdir. Azərbaycanda da ML, AI ilə bağlı mövzularda çoxsaylı pulsuz vörkşoplar keçmişdir.",
    },
    {
      img: celal,
      fullname: "Cəlal Rəhmanov",
      position: "Data Elmi üzrə Ekspert",
      workplace: "Kapital Bank",
      desc: "Dr. Emil Mirzəyev İqtisadiyyat və Biznes Administrasiyası üzrə ikili fəlsəfə elmləri doktoru (PhD) dərəcəsinə sahibdir və hal-hazırda dünyanın top universitetlərindən biri olan University College London-da Süni intellekt və Strateji Qərarqəbuletmə sahələrinin kəsişməsində elmi araşdırma ilə məşğuldur. Python və Data Science ilə 10 ilə yaxın təcrübəsi var və öz işlərini MIT, Harvard və LBS kimi nüfuzlu universitetlərdə, hebelə çoxsaylı beynəlxalq konfranslarda təqdim etmişdir. Azərbaycanda da ML, AI ilə bağlı mövzularda çoxsaylı pulsuz vörkşoplar keçmişdir.",
    },
    {
      img: sebnur,
      fullname: "Şəbnur Pənahlı",
      position: "Business Analyst",
      workplace: "Kapital Bank",
      desc: "Dr. Emil Mirzəyev İqtisadiyyat və Biznes Administrasiyası üzrə ikili fəlsəfə elmləri doktoru (PhD) dərəcəsinə sahibdir və hal-hazırda dünyanın top universitetlərindən biri olan University College London-da Süni intellekt və Strateji Qərarqəbuletmə sahələrinin kəsişməsində elmi araşdırma ilə məşğuldur. Python və Data Science ilə 10 ilə yaxın təcrübəsi var və öz işlərini MIT, Harvard və LBS kimi nüfuzlu universitetlərdə, hebelə çoxsaylı beynəlxalq konfranslarda təqdim etmişdir. Azərbaycanda da ML, AI ilə bağlı mövzularda çoxsaylı pulsuz vörkşoplar keçmişdir.",
    },
  ];

  return (
    <div className="contanierr">
      <div className="teachers">
        <div className="teacher__title">
          <h2>Təlimçilərimiz</h2>
        </div>
        <div className="teacher__list">
          {teachers.map((teacher, index) => (
            <div
              onClick={() => handleOpen(index)}
              className="teacher__profile"
              key={index}
            >
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

              <Modal
                open={openModals[index] || false}
                onClose={() => handleClose(index)}
                disableEscapeKeyDown={false}
              >
                <Box className="modal-content">
                  <div className="teacher__info">
                    <div className="fullname">
                      <h4>{teacher.fullname}</h4>
                    </div>
                    <div className="desc">
                      <p>{teacher.desc}</p>
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
