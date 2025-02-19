import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

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
  const [graduate, setGraduate] = useState([]);
  const { t } = useTranslation();

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchGraduates = async () => {
      try {
        const response = await fetch(`${BASE_URL}/mezunlar/`);

        if (!response.ok) {
          throw new Error("Error fetching training details");
        }

        const data = await response.json();
        setGraduate(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
      }
    };

    fetchGraduates();
  }, []);

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
            {graduate.map((graduate, index) => (
              <SwiperSlide style={{ height: "100%" }} key={index}>
                <div className="graduate">
                  <div className="graduates__img">
                    <img src={graduate.image} alt={`Graduate ${index + 1}`} />
                  </div>
                  <div className="graduate__info">
                    <h3>{graduate.name}</h3>
                    <h5>{graduate.work_position}</h5>
                    <h5>
                      <span>{graduate.work_location}</span>
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
