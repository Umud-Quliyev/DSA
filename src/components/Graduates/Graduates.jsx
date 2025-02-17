import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

import mehemmed from "../../assets/img/mehemmed.jpg";
import aksin from "../../assets/img/aksin.jpg";
import namiq from "../../assets/img/namiq.jpg";
import emil from "../../assets/img/emil.png";
import leyla from "../../assets/img/leyla.jpg";
import teymur from "../../assets/img/teymur.jpg";
import sevda from "../../assets/img/sevda.jpg";
import rauf from "../../assets/img/rauf.jpg";
import terlan from "../../assets/img/terlan.jpg";

import yapikredi from "../../assets/img/yapikredi.png";
import atltech from "../../assets/img/atltech.png";
import kapital from "../../assets/img/kapitalbank.png";
import apf from "../../assets/img/apf.png";
import bravo from "../../assets/img/bravo.png";
import rabitebank from "../../assets/img/rabitebank.png";
import pashabank from "../../assets/img/pashabank.png";
import bakcell from "../../assets/img/bakcell.png";
import accesbank from "../../assets/img/accesbank.png";
import apikz from "../../assets/img/apikz.png";
import unibank from "../../assets/img/unibank.png";
import pashaheyat from "../../assets/img/pashaheyat.png";
import adta from "../../assets/img/adta.png";
import azercell from "../../assets/img/azercell.png";
import dsmf from "../../assets/img/dsmf.png";

import "./Graduates.css";

const Graduates = () => {
  const { t } = useTranslation();

  const graduates = [
    {
      img: mehemmed,
      fullname: "Məhəmmədəli İsmayılov",
      position: t("graduates.positions.remote_data_scientist"),
      workplace: "Dinemates",
    },
    {
      img: aksin,
      fullname: "Akşin Hüseynov",
      position: t("graduates.positions.data_analyst"),
      workplace: "Universal Music Group, Germany",
    },
    {
      img: namiq,
      fullname: "Namiq Cəfərov",
      position: t("graduates.positions.data_analyst"),
      workplace: "Digital Umbrella",
    },
    {
      img: emil,
      fullname: "Emil Aydınsoy",
      position: t("graduates.positions.senior_data_scientist"),
      workplace: "Proxify, Sweden",
    },
    {
      img: leyla,
      fullname: "Leyla Fərzəliyeva",
      position: t("graduates.positions.head_of_analysis"),
      workplace: "DSMF",
    },
    {
      img: teymur,
      fullname: "Teymur Kosayev",
      position: t("graduates.positions.data_analyst"),
      workplace: "Accenture, Poland",
    },
    {
      img: sevda,
      fullname: "Sevda Əsgərzadə",
      position: t("graduates.positions.business_analyst"),
      workplace: "Kapital Bank",
    },
    {
      img: rauf,
      fullname: "Rauf Omarov",
      position: t("graduates.positions.data_scientist"),
      workplace: "Kapital Bank",
    },
    {
      img: terlan,
      fullname: "Tərlan Cəbiyev",
      position: t("graduates.positions.lead_data_scientist"),
      workplace: "PashaPay",
    },
  ];

  const graduate__workplace = [
    { src: yapikredi },
    { src: atltech },
    { src: kapital },
    { src: apf },
    { src: bravo },
    { src: rabitebank },
    { src: pashabank },
    { src: bakcell },
    { src: accesbank },
    { src: apikz },
    { src: unibank },
    { src: pashaheyat },
    { src: adta },
    { src: azercell },
    { src: dsmf },
  ];

  return (
    <div className="contanierr">
      <div className="graduates">
        <div className="graduates__title">
          <h2>{t("graduates.title")}</h2>
        </div>
        <div className="graduates__list">
          <Swiper
            breakpoints={{
              967: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              520: { slidesPerView: 3 },
              320: { slidesPerView: 2 },
            }}
            spaceBetween={78}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {graduates.map((graduate, index) => (
              <SwiperSlide style={{ height: "100%" }} key={index}>
                <div className="graduate">
                  <div className="graduates__img">
                    <img src={graduate.img} alt={`Graduate ${index + 1}`} />
                  </div>
                  <div className="graduate__info">
                    <h3>{graduate.fullname}</h3>
                    <h5>{graduate.position}</h5>
                    <h5>
                      <span>{graduate.workplace}</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="graduate__workplace">
        <div className="workplace__title">
          <h2>{t("graduates.workplace_title")}</h2>
        </div>
        <div className="workplace__list">
          {graduate__workplace.map((workplace, index) => (
            <div key={index} className="workplace">
              <img src={workplace.src} alt={`Company ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graduates;
