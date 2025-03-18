import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useTranslation } from "react-i18next";
const Modals = ({ setOpenModals, session }) => {
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const { t } = useTranslation();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    event_date: "",
  });
  const closeModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModals(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.full_name || !formData.full_name.trim())
      newErrors.name = t("errors.name");
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = t("errors.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("errors.email_invalid");
    }
    if (!formData.phone || !formData.phone.trim()) {
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
    const formattedEventDate = new Date(formData.event_date);
    const formattedDate = formattedEventDate.toISOString().split("T")[0]; 

    const dataToSend = {
      ...formData,
      event_date: formattedDate, 
    };
    try {
      const response = await fetch(`${BASE_URL}/qeydiyyat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success(t("toast.success"), {
          position: "top-right",
          autoClose: 5000,
          transition: Bounce,
        });
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          event_date: "",
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
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        event_date: "",
      });
    }
  };
  const formatDate = (dateString) => {
    const months = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "İyun",
      "İyul",
      "Avqust",
      "Sentyabr",
      "Oktyabr",
      "Noyabr",
      "Dekabr",
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
  };
  return (
    <>
      <div className="modal" onClick={closeModal}>
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col w-11/12 sm:w-120 p-4 bg-white rounded-lg shadow-lg absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center justify-between w-full mt-3 text-center sm:text-left">
            <div className="text-base font-bold text-[#555555]">
              {session.title}
            </div>
            <span
              onClick={() => setOpenModals(false)}
              className="cursor-pointer text-[20px] text-[#a9a9a9]"
            >
              <IoClose />
            </span>
          </div>
          <form onSubmit={handleSubmit} className="py-4">
            <div className="flex flex-col">
              <label className="text-[#a9a9a9] text-[14px] font-[600] mb-2">
                Ad, Soyad
              </label>
              <input
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                type="text"
                className="border border-[#a9a9a9] py-1 pl-2 rounded-[3px] outline-none"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col my-4">
              <label className="text-[#a9a9a9] text-[14px] font-[600] mb-2">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="border border-[#a9a9a9] py-1 pl-2 rounded-[3px] outline-none"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-[#a9a9a9] text-[14px] font-[600] mb-2">
                Əlaqə nömrəsi
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                className="border border-[#a9a9a9] py-1 pl-2 rounded-[3px] outline-none"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col my-4">
              <label className="text-[#a9a9a9] text-[14px] font-[600] mb-2">
                Təlim tarixi
              </label>
              <select
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                className="border border-[#a9a9a9] text-[#495057] text-[18px] py-1 pl-2 rounded-[3px] outline-none"
              >
                {session?.sessiyalar.map((d) => {
                  return (
                    <option value={d.date} key={d.id}>
                      {formatDate(d.date)}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mx-auto w-1/5 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="flex items-center rounded-md bg-blue-600 px-5 py-2 text-md font-semibold text-white shadow-xs hover:bg-blue-700 mx-auto cursor-pointer"
              >
                Göndər
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
Modals.propTypes = {
  setOpenModals: PropTypes.func.isRequired,
  session: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sessiyalar: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modals;
