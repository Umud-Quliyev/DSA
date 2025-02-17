import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modals from "../Modal/Modals";

const Details = () => {
  const { id } = useParams();
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openModals, setOpenModals] = useState(false);

  /* const handleOpen = (index) => {
    setOpenModals({ ...openModals, [index]: true });
  };

  const handleClose = (index) => {
    setOpenModals({ ...openModals, [index]: false });
  }; */

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        setLoading(true);

        const response = await fetch(`http://127.0.0.1:8000/scripts/11/`);

        if (!response.ok) {
          throw new Error("Error fetching training details");
        }

        const data = await response.json();
        setSelectedTraining(data);

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
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingDetails();
  }, [id]);

  const trainingData = [
    {
      language: "az",
      title: selectedTraining?.title || "Təlim",
      date: "1 Fevral",
      time: "Təyin ediləcək",
      bgcolor: "#22C4CD",
    },
    {
      language: "en",
      title: selectedTraining?.headers?.en || "Training",
      date: "1st of February",
      time: "Planned",
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


const openModal = ()=>{
  setOpenModals(true)
}

  return (
    <div className="training__details pt-20">
      {
        openModals && <Modals setOpenModals={setOpenModals}/>
      }
      <div className="contanierr">
        <div className="training__title">
          {loading ? (
            <>
              <Skeleton
                animation="wave"
                variant="circular"
                width={112}
                height={112}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={380}
                height={60}
              />
            </>
          ) : (
            <>
              <img
                src={selectedTraining?.image}
                alt={selectedTraining?.title}
              />
              <h2>{selectedTraining.title}</h2>
            </>
          )}
        </div>
        <div className="training__desc">
          <Typography variant="caption">
            {loading ? (
              <>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
              </>
            ) : (
              selectedTraining?.description
            )}
          </Typography>
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
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div className="table__card" key={index}>
                    <div className="card__title">
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width="100%"
                        height={40}
                      />
                    </div>
                    <div className="card__body">
                      <div className="card__date">
                        <Skeleton
                          animation="wave"
                          variant="circular"
                          width={20}
                          height={20}
                        />
                        <Skeleton
                          animation="wave"
                          variant="text"
                          width="100%"
                          height={20}
                        />
                      </div>
                      <div className="card__time">
                        <Skeleton
                          animation="wave"
                          variant="circular"
                          width={20}
                          height={20}
                        />
                        <Skeleton
                          animation="wave"
                          variant="text"
                          width="100%"
                          height={20}
                        />
                      </div>
                    </div>
                    <div className="card__button">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width="100%"
                        height={30}
                      />
                    </div>
                  </div>
                ))
              : selectedTraining.sessions.map((training, index) => (
                  <div className="table__card" key={index}>
                    <div
                      style={{ backgroundColor: "#22C4CD" }}
                      className="card__title"
                    >
                      <h3>{selectedTraining.title}</h3>
                    </div>
                    <div className="card__body">
                      <div className="card__date">
                        <FaCalendarAlt color="#22C4CD" />
                        <span>{training.date}</span>
                      </div>
                      <div className="card__time">
                        <FaRegClock color="#22C4CD" />
                        <span>{training.hour}</span>
                      </div>
                    </div>
                    <div className="card__button">
                      <button style={{ backgroundColor: training.bgcolor }} onClick={openModal}>
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
            {loading ? (
              <>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="90%"
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="70%"
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="60%"
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="50%"
                  height={20}
                />
              </>
            ) : (
              <p>{selectedTraining?.information}</p>
            )}
          </div>
          <div className="certificate__container">
            <div className="info__certificate">
              <div className="info__title">
                <h2>Bu təlim kimlər üçündür?</h2>
                {loading ? (
                  <>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="100%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="100%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="90%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="70%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="60%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="50%"
                      height={20}
                    />
                  </>
                ) : (
                  <p>{selectedTraining?.for_who}</p>
                )}
              </div>
              <div className="certificate__text">
                <h2>Sertifikat</h2>
                {loading ? (
                  <>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="100%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="80%"
                      height={20}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="60%"
                      height={20}
                    />
                  </>
                ) : (
                  <p>{selectedTraining?.certificates}</p>
                )}
              </div>
            </div>
            <div className="certificate__img">
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={450}
                  height={310}
                />
              ) : (
                <img src={selectedTraining?.certificate_image} alt="" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="training__demo">
        <div className="contanierr">
          <div className="training__lessons">
            <div>
              <span>Nümayiş dərsi</span>
              <div className="training__video">
                {loading ? (
                  <Skeleton variant="rectangular" width={530} height={374} />
                ) : (
                  <iframe
                    width="530"
                    height="374"
                    src={`https://www.youtube.com/embed/${selectedTraining?.link}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
            <div className="lessons__info">
              <div className="info__title">
                {loading ? (
                  <Skeleton variant="text" width="100%" height={30} />
                ) : (
                  <h2>{selectedTraining?.title}</h2>
                )}
              </div>
              <div className="demo__info">
                <div>
                  <span>Dərs</span>
                  {loading ? (
                    <Skeleton variant="text" width="100%" height={20} />
                  ) : (
                    <p>{selectedTraining?.broadcast.title}</p>
                  )}
                </div>
                <div>
                  <span>Təlimçi</span>
                  {loading ? (
                    <Skeleton variant="text" width="100%" height={20} />
                  ) : (
                    <p>{selectedTraining?.broadcast.trainer}</p>
                  )}
                </div>
                <div>
                  <span>Məlumat</span>
                  {loading ? (
                    <>
                      <Skeleton variant="text" width="100%" height={20} />
                      <Skeleton variant="text" width="90%" height={20} />
                      <Skeleton variant="text" width="80%" height={20} />
                    </>
                  ) : (
                    <p>{selectedTraining?.broadcast.info}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="syllabus">
        <div className="contanierr">
          <div className="syllabus__title">
            <h2>Sillabus</h2>
          </div>
          <div className="syllabus__container">
            {loading ? (
              <>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="syllabus__item">
                    <Skeleton variant="text" width="100%" height={25} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="100%" height={25} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                  </div>
                ))}
              </>
            ) : selectedTraining?.syllabus?.length > 0 ? (
              selectedTraining.syllabus.map((info, index) => (
                <div key={index} className="syllabus__item">
                  {info.title && (
                    <div className="session__info">
                      <h3>
                        <strong>{info.title}</strong>
                      </h3>
                      <ul>
                        {info.description
                          ?.split(/\r\n/)
                          .filter((item) => item.trim() !== "")
                          .map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {info.information && (
                    <div className="case__info">
                      <h3>
                        <strong>{info.label}</strong>
                      </h3>
                      <ul>
                        {info.information
                          ?.split(/\r\n/)
                          .filter((item) => item.trim() !== "")
                          .map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Sillabus məlumatı mövcud deyil</p>
            )}
          </div>
        </div>
      </div>

      <div className="testimonials"></div>

      <div className="trainers">
        <div className="contanierr">
          <div className="trainers__title">
            <h2>Təlimçilər</h2>
          </div>
          <div className="trainers__list">
            {loading ? (
              [...Array(2)].map((_, index) => (
                <div key={index} className="trainer">
                  <div className="trainer__img">
                    <Skeleton variant="circular" width={150} height={150} />
                  </div>
                  <div className="trainer__info">
                    <Skeleton variant="text" width="20%" height={30} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="80%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="40%" height={20} />
                  </div>
                </div>
              ))
            ) : selectedTraining?.trainers?.length > 0 ? (
              selectedTraining.trainers.map((info, index) => (
                <div key={index} className="trainer">
                  <div className="trainer__img">
                    <img src={info?.image} alt="" />
                  </div>
                  <div className="trainer__info">
                    <h3>{info?.name}</h3>
                    <span>{info?.work_location}</span>
                    <p>{info?.info}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Təlimçi tapılmadı.</p>
            )}
          </div>
        </div>
      </div>

      <div className="session__tables">
        <div className="contanierr">
          <div className="tables__title">
            <h2>Sessiyalar</h2>
          </div>
          <div className="table__list">
            {loading ? (
              [...Array(4)].map((_, index) => (
                <div className="table__card" key={index}>
                  <div className="card__title">
                    <Skeleton variant="text" width="100%" height={30} />
                  </div>
                  <div className="card__body">
                    <div className="card__time">
                      <Skeleton variant="circular" width={25} height={25} />
                      <Skeleton variant="text" width={150} height={20} />
                    </div>
                    <div className="training__price">
                      <Skeleton variant="text" width={120} height={30} />
                    </div>
                  </div>
                  <div className="card__button">
                    <Skeleton variant="rectangular" width="100%" height={30} />
                  </div>
                </div>
              ))
            ) : trainingData.length > 0 ? (
              trainingData.map((training, index) => (
                <div className="table__card" key={index}>
                  <div
                    style={{ backgroundColor: training.bgcolor }}
                    className="card__title"
                  >
                    <h3>{training.title}</h3>
                  </div>
                  <div className="card__body">
                    <div className="card__time">
                      <FaRegClock color={training.bgcolor} />
                      <span>{training.time}</span>
                    </div>
                    <div className="training__price">
                      <p>
                        <span>300 AZN</span> 175 AZN
                      </p>
                    </div>
                  </div>
                  <div className="card__button">
                    <button style={{ backgroundColor: training.bgcolor }}>
                      {registerTexts[training.language]}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Seans tapılmadı.</p>
            )}
          </div>
        </div>

        {/* <Modal
          open={false}
          onClose={() => handleClose(index)}
          disableEscapeKeyDown={false}
        >
          <Box className="modal-content">
            <div className="teacher__info">
              <div className="fullname">
                <h4>salsalsa</h4>
              </div>
              <div className="desc">
                <p>skjasd</p>
              </div>
            </div>
          </Box>
        </Modal> */}
      </div>

      <Cluster />
    </div>
  );
};

export default Details;
