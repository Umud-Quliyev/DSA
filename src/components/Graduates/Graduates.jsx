import { useEffect, useState } from "react";
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
import { motion } from "motion/react";
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
      }
    };

    fetchGraduates();
  }, [BASE_URL]);

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
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {t("graduates.title")}
          </motion.h2>
        </div>
        <div className="graduates__list">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 70,
              },
            }}
            pagination={{ clickable: true }}
            loop={true}
            speed={2500}
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
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {t("graduates.workplace_title")}
          </motion.h2>
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
