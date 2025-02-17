import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Modals = ({ setOpenModals }) => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="flex items-center justify-between w-full mt-3 text-center sm:mt-0  sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-bold text-[#555555]"
                  >
                   Qeydiyyat - SPSS ilə Statistika və Data Analitikası

                  </DialogTitle>
                  <span
                    onClick={() => setOpenModals(false)}
                    className="cursor-pointer text-[20px] text-[#a9a9a9] "
                  >
                    <IoClose />
                  </span>
                </div>
              </div>
              <form action="" className="py-4">
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-[#a9a9a9] text-[14px]">Ad, Soyad</label>
                  <input type="text" className="border border-[#a9a9a9] py-1 rounded-[3px] outline-none" />
                </div>
                <div className="flex flex-col my-4">
                  <label htmlFor="" className="text-[#a9a9a9] text-[14px]">Email</label>
                  <input type="text" className="border border-[#a9a9a9] py-1 rounded-[3px] outline-none" />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-[#a9a9a9] text-[14px]">Əlaqə nömrəsi</label>
                  <input type="text" className="border border-[#a9a9a9] py-1 rounded-[3px] outline-none" />
                </div>
                <div className="flex flex-col my-4">
                  <label htmlFor="" className="text-[#a9a9a9] text-[14px]">Təlim tarixi</label>
                  <select name="" id="" className="border border-[#a9a9a9] text-[#a9a9a9] text-[18px] py-1 rounded-[3px] outline-none">
                    <option value="" className="text-[#a9a9a9]">1 Fevral</option>
                  </select>
                </div>
                <div className="mx-auto w-1/5 bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex  items-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 sm:ml-3 sm:w-auto mx-auto"
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
  );
};

export default Modals;
