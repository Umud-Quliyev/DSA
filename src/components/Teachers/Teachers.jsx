import React, { useState } from "react";
import { t } from "i18next";
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
import { useTranslation } from "react-i18next";

const Teachers = () => {
  const [openModals, setOpenModals] = useState({});

  const handleOpen = (index) => {
    setOpenModals({ ...openModals, [index]: true });
  };

  const handleClose = (index) => {
    setOpenModals({ ...openModals, [index]: false });
  };

  const { t } = useTranslation();

  const teachers = [
    {
      img: etibar,
      fullname: t("teacher.etibar.name"),
      position: t("teacher.etibar.position"),
      workplace: t("teacher.etibar.workplace"),
      desc: t("teacher.etibar.desc"),
    },
    {
      img: minure,
      fullname: t("teacher.minure.name"),
      position: t("teacher.minure.position"),
      workplace: t("teacher.minure.workplace"),
      desc: t("teacher.minure.desc"),
    },
    {
      img: behruz,
      fullname: t("teacher.behruz.name"),
      position: t("teacher.behruz.position"),
      workplace: t("teacher.behruz.workplace"),
      desc: t("teacher.behruz.desc"),
    },
    {
      img: emil,
      fullname: t("teacher.emil.name"),
      position: t("teacher.emil.position"),
      workplace: t("teacher.emil.workplace"),
      desc: t("teacher.emil.desc"),
    },
    {
      img: turgut,
      fullname: t("teacher.turgut.name"),
      position: t("teacher.turgut.position"),
      workplace: t("teacher.turgut.workplace"),
      desc: t("teacher.turgut.desc"),
    },
    {
      img: ehmed,
      fullname: t("teacher.ehmed.name"),
      position: t("teacher.ehmed.position"),
      workplace: t("teacher.ehmed.workplace"),
      desc: t("teacher.ehmed.desc"),
    },
    {
      img: celal,
      fullname: t("teacher.celal.name"),
      position: t("teacher.celal.position"),
      workplace: t("teacher.celal.workplace"),
      desc: t("teacher.celal.desc"),
    },
    {
      img: sebnur,
      fullname: t("teacher.sebnur.name"),
      position: t("teacher.sebnur.position"),
      workplace: t("teacher.sebnur.workplace"),
      desc: t("teacher.sebnur.desc"),
    },
  ];

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
