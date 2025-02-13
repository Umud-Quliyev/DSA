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

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        setLoading(true);

        const trainingsRes = await fetch("http://localhost:3000/trainings");
        const trainingsData = await trainingsRes.json();

        const sectionsRes = await fetch("http://localhost:3000/sections");
        const sectionsData = await sectionsRes.json();

        const mergedData = trainingsData.map((training) => ({
          ...training,
          sections: sectionsData.filter(
            (sec) => Number(sec.trainingId) === Number(training.id)
          ),
        }));

        setTrainings(mergedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingDetails();
  }, [id]);

  const clickHandler = (section) => {
    setSelectedSections((prevSelected) => {
      const isSelected = prevSelected.find((s) => s.id === section.id);
      let updatedSelection;

      if (isSelected) {
        // Eğer zaten seçiliyse kaldır
        updatedSelection = prevSelected.filter((s) => s.id !== section.id);
      } else {
        // Yeni seçim ekle
        updatedSelection = [...prevSelected, section];
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
    if (count === 1) return 0; // 1 seçimde indirim yok
    if (count === 2) return 0.1; // %10 indirim
    if (count === 3) return 0.15; // %15 indirim
    if (count >= 4) return 0.2; // %20 indirim
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
                  {training.sections.map((section) => (
                    <span
                      key={section.id}
                      onClick={() => clickHandler(section)}
                      className="training__chk text-[#50264E] pr-3 transition duration-300 ease hover:text-[#fccd00] hover:bg-[#f8f9fb] p-1 flex item-center gap-1 cursor-pointer"
                    >
                      <Checkbox
                        {...label}
                        checked={selectedSections.some(
                          (s) => s.id === section.id
                        )}
                        onChange={() => clickHandler(section)}
                      />
                      {section.headers?.az}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="training__price text-xl font-bold">
            <p>
              <span>
                {selectedSections.length > 1 && <p> {totalPrice.toFixed(2)}</p>}
              </span>
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
