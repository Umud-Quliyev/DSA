import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cluster from "./Cluster/Cluster";
import DetailHeadSection from "./DetailHeadSection/DetailHeadSection";
import DetailTrainingSection from "./DetailTrainingSection/DetailTrainingSection";
import DetailTrainingCompanySection from "./DetailTrainingCompanySection/DetailTrainingCompanySection";
import DetailSertificateSection from "./DetailSertificateSection/DetailSertificateSection";
import DetailYoutubeSection from "./DetailYoutubeSection/DetailYoutubeSection";
import DetailSyllabusSection from "./DetailSyllabusSection/DetailSyllabusSection";
import DetailTrainerSection from "./DetailTrainerSection/DetailTrainerSection";
import DetailSessionSection from "./DetailSessionSection/DetailSessionSection";

const Detail = () => {
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModals, setOpenModals] = useState(false);
  const openModal = (session) => {
    setOpenModals(true);
    setSelectedSession(session);
  };
  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setOpenModals(false);
    }
  };

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/metinler/${id}/`);
        if (!response.ok) {
          throw new Error("Error fetching training details");
        }
        const data = await response.json();
        setSelectedTraining(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingDetails();
  }, [BASE_URL, id]);

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

  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    return `${hour}:${minute}`;
  };

  const addTime = (time, hoursToAdd, minutesToAdd) => {
    const [hour, minute] = time.split(":").map(Number);
    const totalMinutes = minute + minutesToAdd;
    const totalHours = hour + hoursToAdd + Math.floor(totalMinutes / 60);
    const finalMinutes = totalMinutes % 60;
    return `${String(totalHours).padStart(2, "0")}:${String(
      finalMinutes
    ).padStart(2, "0")}`;
  };
  const trainingData = [
    {
      title: selectedTraining?.title || "Təlim",
      bgcolor: "#22C4CD",
    },
    {
      bgcolor: "#E21B5D",
    },
    {
      bgcolor: "#FFB600",
    },
    {
      bgcolor: "#7D5EF5",
    },
  ];

  /*  const registerTexts = {
    az: "Qeydiyyatdan keç",
    en: "Register",
    de: "Registrieren",
    ru: "Зарегистрироваться",
  }; */

  return (
    <div className="pt-30">
      <DetailHeadSection data={selectedTraining} />
      <section>
        <div className=" bg-[#32cccc] text-white py-8 tracking-wide mb-10 px-2 md:px-5  lg:px-0">
          <p className="text-[20px]    lg:w-5/6  mx-auto">
            Təlimlər oflayn (ofisdaxili) və onlayn formada keçirilir.
          </p>
        </div>
      </section>
      <DetailTrainingSection
        selectedTraining={selectedTraining}
        trainingData={trainingData}
        formatTime={formatTime}
        addTime={addTime}
        formatDate={formatDate}
        openModals={openModals}
        openModal={openModal}
        setOpenModals={setOpenModals}
        selectedSession={selectedSession}
        closeModal={closeModal}
      />
      <DetailTrainingCompanySection />
      <DetailSertificateSection selectedTraining={selectedTraining} />
      <DetailYoutubeSection selectedTraining={selectedTraining} />

      <DetailSyllabusSection selectedTraining={selectedTraining} />

      <section>
        <div className="testimonials "></div>
      </section>

      <DetailTrainerSection selectedTraining={selectedTraining} />

      <DetailSessionSection
        selectedTraining={selectedTraining}
        trainingData={trainingData}
        formatDate={formatDate}
        openModal={openModal}
      />

      <Cluster />
    </div>
  );
};

export default Detail;
