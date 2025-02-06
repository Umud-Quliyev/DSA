import React, { useState } from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Element } from "react-scroll";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <Element name="contact" className="contanierr">
      <div className="contact">
        <div className="contact__title">
          <h2>Əlaqə</h2>
        </div>
        <form className="contact__form" action="#">
          <div className="form__head">
            <input type="text" placeholder="Ad:" />
            <input type="text" placeholder="Soyad:" />
          </div>
          <div className="form__head">
            <input type="email" placeholder="Email:" />
            <input type="number" placeholder="Əlaqə nömrəsi:" />
          </div>
          <div className="form__select">
            <FormControl fullWidth>
              <InputLabel id="service-select-label">
                Sizə hansı sahədə kömək edə bilərik?
              </InputLabel>
              <Select
                labelId="service-select-label"
                id="service-select"
                value={selectedService}
                onChange={handleChange}
                label="Sizə hansı sahədə kömək edə bilərik?" // BURA ƏLAVƏ EDİLDİ
              >
                <MenuItem value={"data-science"}>
                  Data Science Bootcamp
                </MenuItem>
                <MenuItem value={"r-bootcamp"}>R Bootcamp</MenuItem>
                <MenuItem value={"spss-modeler"}>
                  SPSS Modeler Bootcamp
                </MenuItem>
                <MenuItem value={"credit-risk"}>
                  Kredit-Risk Analitikası
                </MenuItem>
                <MenuItem value={"sales-analytics"}>Satış Analitikası</MenuItem>
                <MenuItem value={"hr-analytics"}>HR Analitikası</MenuItem>
                <MenuItem value={"corporate-training"}>
                  Korporativ Təlimlər
                </MenuItem>
                <MenuItem value={"data-job"}>
                  Data ilə əlaqəli işçi axtarırsınız
                </MenuItem>
                <MenuItem value={"paid-project"}>
                  Ödənişli proyekt köməyi
                </MenuItem>
                <MenuItem value={"free-project"}>
                  Ödənişsiz proyekt köməyi
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form__text">
            <textarea
              name="message"
              id="message"
              placeholder="Mesaj"
            ></textarea>
          </div>

          <button type="submit">Göndər</button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
