import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/sections/${id}`);
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        setSelectedTraining(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingDetails();
  }, [id]);

  return (
    <div className="contanierr">
      <div className="training__details">
        {selectedTraining ? (
          <>
            <div className="training__title">
              <img src={selectedTraining.img} alt="" />
              <h2>{selectedTraining.headers}</h2>
            </div>
            <div className="training__desc">
              <p>{selectedTraining.description}</p>
            </div>
          </>
        ) : (
          <p>Telim Tapilmadi</p>
        )}
      </div>
    </div>
  );
};

export default Details;
