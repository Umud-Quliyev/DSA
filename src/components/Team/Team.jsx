import React, { useState } from "react";
import "./Team.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Teachers from "../Teachers/Teachers";
import Graduates from "../Graduates/Graduates";
import { Element } from "react-scroll";

const Team = () => {
  return (
    <Element name="team" className="team">
      <div className="teachers">
        <Teachers />
      </div>
      <div className="graduates">
        <Graduates />
      </div>
    </Element>
  );
};

export default Team;
