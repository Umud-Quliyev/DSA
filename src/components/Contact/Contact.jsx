import React, { useState } from "react";
import "./Contact.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ad boş ola bilməz.";
    if (!formData.surname.trim()) newErrors.surname = "Soyad boş ola bilməz.";
    if (!formData.email.trim()) {
      newErrors.email = "Email boş ola bilməz.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Düzgün bir email daxil edin.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon nömrəsi boş ola bilməz.";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Telefon nömrəsi minimum 10 rəqəm olmalıdır.";
    }
    if (!formData.service) newErrors.service = "Xidmət seçilməlidir.";
    if (!formData.message.trim()) {
      newErrors.message = "Mesaj boş ola bilməz.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mesaj minimum 10 simvol olmalıdır.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const requestData = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      phone: formData.phone,
      category: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        toast.success("Uğurla göndərildi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Xəta baş verdi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Xəta baş verdi!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <section id="contact" name="contact" className="contanierr">
      <div className="contact">
        <div className="contact__title">
          <h2>Əlaqə</h2>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__head">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ad:"
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Soyad:"
              required
            />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>
          <div className="form__head">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email:"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Əlaqə nömrəsi:"
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form__select">
            <FormControl fullWidth error={!!errors.service}>
              <InputLabel id="service-select-label">
                Sizə hansı sahədə kömək edə bilərik?
              </InputLabel>
              <Select
                labelId="service-select-label"
                id="service-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <MenuItem value="Data Science Bootcamp">
                  Data Science Bootcamp
                </MenuItem>
                <MenuItem value="SPSS Modeler Bootcamp">
                  SPSS Modeler Bootcamp
                </MenuItem>
                <MenuItem value="Kredit-Risk Analitikası">
                  Kredit-Risk Analitikası
                </MenuItem>
                <MenuItem value="Korporativ Təlimlər">
                  Korporativ Təlimlər
                </MenuItem>
                <MenuItem value="Data ilə əlaqəli işçi axtarırsınız">
                  Data ilə əlaqəli işçi axtarırsınız
                </MenuItem>
                <MenuItem value="Ödənişli proyekt köməyi">
                  Ödənişli proyekt köməyi
                </MenuItem>
                <MenuItem value="Ödənişsiz proyekt köməyi">
                  Ödənişsiz proyekt köməyi
                </MenuItem>
              </Select>
              {errors.service && <p className="error">{errors.service}</p>}
            </FormControl>
          </div>
          <div className="form__text">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesaj"
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Göndər</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};

export default Contact;
