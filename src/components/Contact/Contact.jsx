import  { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation();

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = t("errors.name");
    if (!formData.surname.trim()) newErrors.surname = t("errors.surname");

    if (!formData.email.trim()) {
      newErrors.email = t("errors.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("errors.email_invalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phone");
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = t("errors.phone_invalid");
    }

    if (!formData.service) newErrors.service = t("errors.service");

    if (!formData.message.trim()) {
      newErrors.message = t("errors.message");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("errors.message_short");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${BASE_URL}/elaqe/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("toast.success"), {
          position: "top-right",
          autoClose: 5000,
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
        throw new Error();
      }
    } catch {
      toast.error(t("toast.error"), {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
    }
  };

  return (
    <section id="contact" className="contanierr">
      <div className="contact">
        <div className="contact__title">
          <h2>{t("contact.title")}</h2>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__head">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.name")}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder={t("contact.surname")}
              />
              {errors.surname && <p className="error">{errors.surname}</p>}
            </div>
          </div>
          <div className="form__head">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.email")}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.phone")}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
          <div className="form__select">
            <FormControl fullWidth error={!!errors.service}>
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                displayEmpty
                
              >
                <MenuItem value="">{t("contact.service")}</MenuItem>
                <MenuItem value="Data Science Bootcamp">
                  {t("contact.services.data_science")}
                </MenuItem>
                <MenuItem value="SPSS Modeler Bootcamp">
                  {t("contact.services.spss")}
                </MenuItem>
                <MenuItem value="Credit Risk Analysis">
                  {t("contact.services.credit_risk")}
                </MenuItem>
                <MenuItem value="Corporate Training">
                  {t("contact.services.corporate_training")}
                </MenuItem>
                <MenuItem value="Data Employee Training">
                  {t("contact.services.data_employee")}
                </MenuItem>
                <MenuItem value="Paid Project">
                  {t("contact.services.paid_project")}
                </MenuItem>
                <MenuItem value="Free Project">
                  {t("contact.services.free_project")}
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
              placeholder={t("contact.message")}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">{t("contact.send")}</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        transition={Bounce}
      />
    </section>
  );
};

export default Contact;
