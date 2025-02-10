import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

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

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>Xəta: {error}</p>;
  if (!selectedTraining) return <p>Təlim Tapılmadı</p>;

  const trainingData = [
    {
      language: "az",
      title: selectedTraining?.headers?.az || "Təlim",
      date: "1 Fevral",
      time: "Təyin ediləcək",
      bgcolor: "#22C4CD",
    },
    {
      language: "en",
      title: selectedTraining?.headers?.en || "Training",
      date: "1st of February",
      time: "TBD",
      bgcolor: "#E21B5D",
    },
    {
      language: "de",
      title: selectedTraining?.headers?.de || "Schulung",
      date: "1 Februar",
      time: "Wird noch festgelegt",
      bgcolor: "#FFB600",
    },
    {
      language: "ru",
      title: selectedTraining?.headers?.ru || "Тренинг",
      date: "1 Февраля",
      time: "Будет определено",
      bgcolor: "#7D5EF5",
    },
  ];

  const registerTexts = {
    az: "Qeydiyyatdan keç",
    en: "Register",
    de: "Registrieren",
    ru: "Зарегистрироваться",
  };

  return (
    <div className="training__details pt-20">
      <div className="contanierr">
        <div className="training__title">
          <img src={selectedTraining.img} alt={selectedTraining.headers?.az} />
          <h2>{selectedTraining.headers?.az}</h2>
        </div>
        <div className="training__desc">
          <p>{selectedTraining.description}</p>
        </div>
      </div>

      <div className="training__workplace">
        <div className="contanierr">
          <p>Təlimlər oflayn (ofisdaxili) və onlayn formada keçirilir.</p>
        </div>
      </div>

      <div className="contanierr">
        <div className="training__table">
          <div className="table__title">
            <h2>Təlim Cədvəli</h2>
          </div>
          <div className="table__list">
            {trainingData.map((training, index) => (
              <div className="table__card" key={index}>
                <div
                  style={{ backgroundColor: training.bgcolor }}
                  className="card__title"
                >
                  <h3>{training.title}</h3>
                </div>
                <div className="card__body">
                  <div className="card__date">
                    <FaCalendarAlt color={training.bgcolor} />
                    <span>{training.date}</span>
                  </div>

                  <div className="card__time">
                    <FaRegClock color={training.bgcolor} />
                    <span>{training.time}</span>
                  </div>
                </div>
                <div className="card__button">
                  <button style={{ backgroundColor: training.bgcolor }}>
                    {registerTexts[training.language]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="training__company">
        <div className="contanierr">
          <span>
            Klaster kampanyasına qeydiyyatdan keçərək daha çox qənaət edin!
          </span>
          <button>KLASTER KAMPANİYASI</button>
        </div>
      </div>

      <div className="contanierr">
        <div className="training__info">
          <div className="info__title">
            <h2>Təlim haqqında məlumat</h2>
          </div>
          <div className="info__desc">
            <p>{selectedTraining?.info}</p>
          </div>
          <div className="info__title">
            <h2>Bu təlim kimlər üçündür?</h2>
            <p>{selectedTraining?.whois}</p>
          </div>
          <div className="info__certificate">
            <div className="certificate__text">
              <h2>Sertifikat</h2>
              <p>{selectedTraining?.certificateText}</p>
            </div>
            <div className="certificate__img">
              <img src={selectedTraining?.certificateImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="training__demo">
        <div className="contanierr">
          <div className="demo__title">
            <span>Nümayiş dərsi</span>
          </div>
          <div className="training__lessons">
            <div className="training__video">
              <iframe
                width="530"
                height="374"
                src={`https://www.youtube.com/embed/${selectedTraining?.demovideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lessons__info">
              <div className="info__title">
                <h2>Excel ilə Data Analitikası</h2>
              </div>
              <div className="demo__info">
                <div>
                  <span>Dərs</span>
                  <p>Yeni başlayanlar üçün Excel</p>
                </div>
                <div>
                  <span>Təlimçi</span>
                  <p>Kenji Explains</p>
                </div>
                <div>
                  <span>Məlumat</span>
                  <p>
                    Bu videonu izlədikdə Excel ilə Data Analitikası haqqında
                    baza məlumatlara sahib olacaqsınız. Video Kenji Explains
                    tərəfindəndir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
