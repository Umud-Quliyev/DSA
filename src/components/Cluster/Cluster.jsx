import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Cluster = () => {
  const { id } = useParams();
  const [trainings, setTrainings] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [id]);

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
      <div className="contanierr">
        <div className="cluster__title">
          <h2>
            Klaster kampaniyasına qeydiyyatdan keçərək daha çox qənaət edin!
          </h2>
        </div>
        <div className="cluster__list">
          <div className="list__title">
            <span>Öz klasterini seç</span>
          </div>
          <div className="cluster__box">
            {trainings.map((training) => (
              <div className="training" key={training.id}>
                <div>
                  <h4 className="text-[#2fa8a5] font-bold">{training.name}</h4>
                  <p className="text-[#50264E] font-bold">{training.title}</p>
                </div>
                <div className="flex flex-col">
                  {training.bootcamp_tipi.map((section) => (
                    <div key={section.id} className="training__section">
                      <h5 className="text-[#50264E] font-bold">
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
                            />
                            <span className="text-[#50264E]">
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
          <div className="training__price text-xl font-bold">
            <p>
              {selectedSections.length > 1 && (
                <span>{totalPrice.toFixed(2)}</span>
              )}
              {discountedPrice.toFixed(2)} AZN
            </p>
          </div>
        </div>
        <p className="training__register">QEYDİYYAT</p>
      </div>
    </div>
  );
};

export default Cluster;
