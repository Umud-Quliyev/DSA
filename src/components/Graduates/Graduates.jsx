import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
  const graduates = [
    {
      img: mehemmed,
      fullname: "Məhəmmədəli İsmayılov",
      position: "Remote Data Scientist",
      workplace: "Dinemates",
    },
    {
      img: aksin,
      fullname: "Minurə Hüseynli",
      position: "Head of Data Analytics and Reporting",
      workplace: "Digital Umbrella",
    },
    {
      img: namiq,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: emil,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: leyla,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: teymur,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: sevda,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: rauf,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
    {
      img: terlan,
      fullname: "Bəhruz Qasımov",
      position:
        "Məlumatların keyfiyyəti və təminatının idarə edilməsi üzrə ekspert",
      workplace: "Pasha Bank",
    },
  ];

  const graduate__workplace = [
    {
      src: yapikredi,
    },
    {
      src: atltech,
    },
    {
      src: kapital,
    },
    {
      src: apf,
    },
    {
      src: bravo,
    },
    {
      src: rabitebank,
    },
    {
      src: pashabank,
    },
    {
      src: bakcell,
    },
    {
      src: accesbank,
    },
    {
      src: apikz,
    },
    {
      src: unibank,
    },
    {
      src: pashaheyat,
    },
    {
      src: adta,
    },
    {
      src: azercell,
    },
    {
      src: dsmf,
    },
  ];

  return (
    <div className="contanierr">
      <div className="graduates">
        <div className="graduates__title">
          <h2>Məzunlarımız</h2>
        </div>
        <div className="graduates__list">
          <Swiper
            slidesPerView={5}
            spaceBetween={78}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {graduates.map((graduates, index) => (
              <SwiperSlide style={{ height: "100%" }} key={index}>
                <div className="graduate">
                  <div className="graduates__img">
                    <img src={graduates.img} alt={`Mezun ${index + 1}`} />
                  </div>
                  <div className="graduate__info">
                    <h3>{graduates.fullname}</h3>
                    <h5>{graduates.position}</h5>
                    <h5>
                      <span>{graduates.workplace}</span>
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
          <h2>Məzunlarımız burada çalışır</h2>
        </div>
        <div className="workplace__list">
          {graduate__workplace.map((workplace, index) => (
            <div className="workplace">
              <img src={workplace.src} alt={`sirket ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graduates;
