import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import { useTranslation } from "react-i18next";


const Modals = ({ setOpenModals, session, closeModal }) => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("errors.name");
    if (!formData.surname.trim()) newErrors.surname = t("errors.surname");
    if (!formData.email.trim()) {
      newErrors.email = t("errors.email.empty");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("errors.email.invalid");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phone.empty");
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = t("errors.phone.invalid");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${BASE_URL}/apply/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <>
      <Dialog
        open={true} onClose={closeModal}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" onClick={closeModal}/>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between w-full mt-3 text-center sm:text-left">
                  <DialogTitle className="text-base font-bold text-[#555555]">
                  {session.title}
                  </DialogTitle>
                  <span
                    onClick={() => setOpenModals(false)}
                    className="cursor-pointer text-[20px] text-[#a9a9a9]"
                  >
                    <IoClose />
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="py-4">
                  <div className="flex flex-col">
                    <label className="text-[#a9a9a9] text-[14px]">Ad, Soyad</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="border border-[#a9a9a9] py-1 rounded-[3px] outline-none"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col my-4">
                    <label className="text-[#a9a9a9] text-[14px]">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="text"
                      className="border border-[#a9a9a9] py-1 rounded-[3px] outline-none"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[#a9a9a9] text-[14px]">
                      Əlaqə nömrəsi
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="text"
                      className="border border-[#a9a9a9] py-1 rounded-[3px] outline-none"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col my-4">
                    <label className="text-[#a9a9a9] text-[14px]">
                      Təlim tarixi
                    </label>
                    <select className="border border-[#a9a9a9] text-[#a9a9a9] text-[18px] py-1 rounded-[3px] outline-none">
                      <option value="">1 Fevral</option>
                    </select>
                  </div>

                  <div className="mx-auto w-1/5 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="flex items-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 mx-auto cursor-pointer"
                    >
                      Göndər
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        transition={Bounce}
      />
     
    </>
  );
}
  Modals.propTypes = {
    setOpenModals: PropTypes.func.isRequired,
    session: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default Modals;

