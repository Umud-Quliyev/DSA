import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

const Cluster = () => {
  const { id } = useParams();
  const [trainings, setTrainings] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        setLoading(true);
        const trainingsRes = await fetch(`${BASE_URL}/bootcamps/`);
        const trainingsData = await trainingsRes.json();
        setTrainings(trainingsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingDetails();
  }, [BASE_URL, id]);

  const clickHandler = (telim) => {
    setSelectedSections((prevSelected) => {
      const isSelected = prevSelected.find((s) => s.id === telim.id);
      let updatedSelection;

      if (isSelected) {
        updatedSelection = prevSelected.filter((s) => s.id !== telim.id);
      } else {
        updatedSelection = [
          ...prevSelected,
          { ...telim, price: telim.money ?? 0 },
        ];
      }

      updateTotalPrice(updatedSelection);
      return updatedSelection;
    });
  };

  const updateTotalPrice = (selected) => {
    const total = selected.reduce(
      (sum, section) => sum + (section.price || 0),
      0
    );
    const discountRate = getDiscountRate(selected.length);
    const discounted = total - total * discountRate;

    setTotalPrice(total);
    setDiscountedPrice(discounted);
  };

  const getDiscountRate = (count) => {
    if (count === 1) return 0;
    if (count === 2) return 0.1;
    if (count === 3) return 0.15;
    if (count >= 4) return 0.2;
    return 0;
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="cluster">
      <div className="w-full mx-auto lg:w-5/6 px-2 md:px-5  lg:px-0">
        <div id="cluster" className="cluster__title pb-5">
          <h2 className="font-[600] text-[24px] text-[#330033]">
            Klaster kampaniyasına qeydiyyatdan keçərək daha çox qənaət edin!
          </h2>
        </div>
        <div id="cluster" className="cluster__list">
          <div className="list__title">
            <span>Öz klasterini seç</span>
          </div>
          <div className="cluster__box flex flex-wrap gap-5 justify-between">
  {trainings.map((training) => (
    <div
      className="training w-full sm:w-[300px] xl:w-[30%] min-w-[250px]"
      key={training.id}
    >
      <div>
        <h4 className="text-[#2fa8a5] font-bold text-[20px]">
          {training.name}
        </h4>
        <p className="text-[#50264E] font-[500]">{training.title}</p>
      </div>
      <div className="flex flex-col">
        {training.bootcamp_tipi.map((section) => (
          <div key={section.id} className="training__section">
            <h5 className="text-[#50264E] font-bold text-[16px]">
              {section.name}
            </h5>
            <div className="flex flex-col pt-2 pb-2">
              {section.telimler.map((telim) => (
                <div
                  key={telim.id}
                  className="flex gap-2 items-center pt-2 pb-2"
                >
                  <Checkbox
                    {...label}
                    checked={selectedSections.some((s) => s.id === telim.id)}
                    onChange={() => clickHandler(telim)}
                    sx={{
                      color: selectedSections.some(
                        (s) => s.id === telim.id
                      )
                        ? "#2fa8a5 !important"
                        : "inherit",
                      "&.Mui-checked": {
                        color: "#2fa8a5 !important",
                      },
                    }}
                  />
                  <span className="text-[#000000] text-[18px] font-[500]">
                    {telim.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

          
          <div className="training__price text-xl font-bold text-end">
            <p className="flex items-center justify-end g-5">
              {selectedSections.length > 1 && (
                <span>{totalPrice.toFixed(2)}</span>
              )}
              {discountedPrice.toFixed(2)} AZN
            </p>
          </div>
        </div>
        <p className="training__register pr-5" onClick={() => setIsOpen(true)}>
          QEYDİYYAT
        </p>
      </div>
      {isOpen && <RegistrationModal setOpenModals={setIsOpen} />}
    </div>
  );
};

export default Cluster;

/* <div className="cluster__box flex flex-wrap xl:flex-nowrap gap-5 justify-between ">
            {trainings.map((training) => (
              <div className="training" key={training.id}>
                <div>
                  <h4 className="text-[#2fa8a5] font-bold text-[20px]">{training.name}</h4>
                  <p className="text-[#50264E] font-[500] ">{training.title}</p>
                </div>
                <div className="flex flex-col">
                  {training.bootcamp_tipi.map((section) => (
                    <div key={section.id} className="training__section">
                      <h5 className="text-[#50264E] font-bold text-[16px]">
                        {section.name}
                      </h5>

                      <div className="flex flex-col pt-2 pb-2">
                        {section.telimler.map((telim) => (
                          <div
                            key={telim.id}
                            className="flex gap-2 items-center pt-2 pb-2"
                          >
                            <Checkbox
                              {...label}
                              checked={selectedSections.some(
                                (s) => s.id === telim.id
                              )}
                              onChange={() => clickHandler(telim)}
                              sx={{
                                color: selectedSections.some(
                                  (s) => s.id === telim.id
                                )
                                  ? "#2fa8a5 !important"
                                  : "inherit",
                                "&.Mui-checked": {
                                  color: "#2fa8a5 !important",
                                },
                              }}
                            />
                           { <span className="text-[#000000] text-[18px] font-[500]">
                              {telim.title}
                            </span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="training__price text-xl font-bold text-end">
            <p className="flex items-center justify-end g-5">
              {selectedSections.length > 1 && (
                <span>{totalPrice.toFixed(2)}</span>
              )}
              {discountedPrice.toFixed(2)} AZN
            </p>
          </div>
        </div> */
