import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const RequestPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("errors.name");
    if (!formData.surname.trim())
      newErrors.surname = t("errors.surname");
    if (!formData.email.trim()) {
      newErrors.email = t("errors.email");
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t("errors.email_invalid");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phone");
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = t("errors.phone_invalid");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${BASE_URL}/muraciet/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("toast.success"), { transition: Bounce });
        setFormData({ name: "", surname: "", email: "", phone: "" });
      } else {
        toast.error(t("toast.error"), { transition: Bounce });
        setFormData({ name: "", surname: "", email: "", phone: "" });

      }
    } catch (error) {
      toast.error(t("toast.error"), { transition: Bounce });
      setFormData({ name: "", surname: "", email: "", phone: "" });

    }
  };

  return (
    <section className="pt-30 request">
      <div className="w-5/6 mx-auto ">
        <h2 className="text-[4vw] text-center font-[300] text-[#212331] md:text-[2.61vw]">
          {t("form.title")}
        </h2>
        <form
          className="my-10 flex flex-wrap justify-evenly gap-3 mx-auto md:w-full"
          onSubmit={handleSubmit}
        >
          {["name", "surname", "email", "phone"].map((field, index) => (
            <div key={index} className="w-full md:w-[49%] ">
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type={field === "email" ? "email" : "text"}
                placeholder={t(`contact.${field}`)}
                className={`w-full py-3 border-b-1 outline-none ${
                  errors[field] ? "border-red-500" : ""
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#28aaa8] text-[#fff] font-bold py-3 mt-5 rounded-[30px] cursor-pointer transition duration-500 ease-in-out hover:bg-[#e2195b]"
          >
            {t("form.submit")}
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};

export default RequestPage;
