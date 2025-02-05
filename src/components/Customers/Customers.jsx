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

const Customers = () => {
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
    <div id="customer" className="contanierr">
      <div className="customers">
        <div className="customer__title">
          <h2>Əməkdaşlıq etdiyimiz şirkətlər</h2>
        </div>
        <div className="customer__list">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {customers.map((customer, index) => (
              <SwiperSlide key={index}>
                <img src={customer.src} alt={`Şirkət ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Customers;
