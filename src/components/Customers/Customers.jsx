import "./Customers.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import ipoteka from "../../assets/img/ipoteka.png";
import kapitalbank from "../../assets/img/kapitalbank.png";
import pashaheyat from "../../assets/img/pashaheyat.png";
import rabitebank from "../../assets/img/rabitebank.png";
import azercell from "../../assets/img/azercell.png";
import bravo from "../../assets/img/bravo.png";
import bakcell from "../../assets/img/bakcell.png";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import yapikredi from "../../assets/img/yapikredi.png";
import atltech from "../../assets/img/atltech.png";
import apf from "../../assets/img/apf.png";
import pashabank from "../../assets/img/pashabank.png";
import accesbank from "../../assets/img/accesbank.png";
import unibank from "../../assets/img/unibank.png";
import adta from "../../assets/img/adta.png";
const Customers = () => {
  const { t } = useTranslation();

  const customers = [
    { src: ipoteka },
    { src: kapitalbank },
    { src: rabitebank },
    { src: pashabank },
    { src: azercell },
    { src: bakcell },
    { src: bravo },
    { src: unibank },
    { src: yapikredi },
    { src: atltech },
    { src: accesbank },
    { src: pashaheyat },
    { src: adta },
    { src: apf },
    { src: unibank },
  ];

  return (
    <section id="customer" name="customer" className="contanierr">
      <div className="customers pt-15">
        <div
          className="customer__title"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <h2>{t("customer_title")}</h2>
        </div>
        <div className="customer__list">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            speed={2500}
            modules={[Pagination]}
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
          >
            {customers.map((customer, index) => (
              <SwiperSlide key={index}>
                <img src={customer.src} alt={`Şirkət ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Customers;
