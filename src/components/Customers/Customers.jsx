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
import { Element } from "react-scroll";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Customers = () => {
  const { t } = useTranslation();

  const customers = [
    { src: ipoteka },
    { src: kapitalbank },
    { src: pashaheyat },
    { src: rabitebank },
    { src: azercell },
    { src: bravo },
    { src: bakcell },
  ];
  return (
    <section id="customer" name="customer" className="contanierr">
      <div className="customers pt-15">
        <div className="customer__title">
          <h2>{t("customer_title")}</h2>
        </div>
        <div className="customer__list">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              967: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              520: {
                slidesPerView: 3,
              },
              320: {
                slidesPerView: 2,
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
