import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modals from "../Modal/Modals";
import Cluster from "../Cluster/Cluster";

const Details = () => {
  const { id } = useParams();
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openModals, setOpenModals] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL;

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
  console.log(selectedTraining, "selectedsadad");
  const formatDate = (dateString) => {
    const months = [
      "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", 
      "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
    ];
  
    const date = new Date(dateString); 
  
    const day = date.getDate(); 
    const month = months[date.getMonth()]; 
    return `${day} ${month}`; 
  };
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
      date: "1st of February",
      time: "Planned",
      bgcolor: "#E21B5D",
    },
    {
      language: "de",
      date: "1 Februar",
      time: "Wird noch festgelegt",
      bgcolor: "#FFB600",
    },
    {
      language: "ru",
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

  const openModal = () => {
    setOpenModals(true);
  };

  return (
    <div className="training__details pt-20">
      {openModals && <Modals setOpenModals={setOpenModals} />}
      <div className="  w-full md:w-4/5 md:px-20  sm:px-10 px-5  mx-auto  ">
        <div className="training__title  w-auto">
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
            <div className="flex gap-4 items-center">
              <img
                src={selectedTraining?.image}
                alt={selectedTraining?.title}
                className="w-25 h-auto"
              />
              <h2 className="text-[5vw] sm:text-[4vw] md:text-[2.6vw] font-[300]">
                {selectedTraining?.title}
              </h2>
            </div>
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
              <p className="">{selectedTraining?.description}</p>
            )}
          </Typography>
        </div>
      </div>

      <div className="training__workplace">
        <div /* className="contanierr" */ className="w-full">
          <p className="px-5 sm:px-10 text-[3.2vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.5vw] md:w-4/5 mx-auto md:px-20">
            Təlimlər oflayn (ofisdaxili) və onlayn formada keçirilir.
          </p>
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
              : selectedTraining?.sessiyalar?.map((session, index) => {
                  const trainingInfo = trainingData[index];
                  if (!trainingInfo) return null;

                  return (
                    <div className="table__card" key={index}>
                      <div
                        style={{ backgroundColor: trainingInfo.bgcolor }}
                        className="card__title"
                      >
                        <h3>{selectedTraining.title}</h3>
                      </div>
                      <div className="card__body">
                        <div className="card__date">
                          <FaCalendarAlt color={trainingInfo.bgcolor} />
                          <span>{session.date}</span>
                        </div>
                        <div className="card__time">
                          <FaRegClock color={trainingInfo.bgcolor} />
                          <span>{session.hour}</span>
                        </div>
                      </div>
                      <div className="card__button">
                        <button
                          onClick={() => openModal(true)}
                          style={{ backgroundColor: trainingInfo.bgcolor }}
                        >
                          Qeydiyyatdan keç
                        </button>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      <div className="training__company">
        <div
          /* className="contanierr" */ className="flex items-center justify-between w-full md:w-4/5 px-5 sm:px-10 md:px-20 mx-auto"
        >
          <span className="">
            Klaster kampanyasına qeydiyyatdan keçərək daha çox qənaət edin!
          </span>
          <button className="sm:py-4 md:px-5 md:py-4 md:px-5">
            KLASTER KAMPANİYASI
          </button>
        </div>
      </div>

      <div /* className="contanierr" */ className="my-5 ">
        <div className="training__info   w-full md:w-4/5 px-5 sm:px-10 md:px-20 mx-auto">
          <div className="info__title">
            <h2 className="text-[6vw] md:text-[3vw]">Təlim haqqında məlumat</h2>
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
          <div className="certificate__container w-full">
            <div className="info__certificate ">
              <div className="info__title w-full">
                <h2 className="text-[7vw] sm:text-[5vw] md:text-[3vw] text-nowrap">
                  Bu təlim kimlər üçündür?
                </h2>
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
            <div className="certificate__img ">
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
        <div
          /* className="contanierr" */ className="w-full md:w-4/5 px-5 sm:px-10 md:px-20 mx-auto"
        >
          <div
            /* className="training__lessons" */ className="flex flex-col lg:flex-row lg:gap-5 "
          >
            <div>
              <span className="text-[26px] font-bold">Nümayiş dərsi</span>
              <div className="training__video mt-3">
                {loading ? (
                  <Skeleton variant="rectangular" width={530} height={374} />
                ) : (
                  <div className=" h-[60vw] sm:h-[300px] lg:w-[500px] xl:w-[530px] md:w-full md:h-[374px] ">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedTraining?.nümayislər?.link}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            <div className="lessons__info ">
              <div className="info__title">
                {loading ? (
                  <Skeleton variant="text" width="100%" height={30} />
                ) : (
                  <h2 className=" text-[18px] sm:text-[20px] md:text-[30px]">
                    {selectedTraining?.title}
                  </h2>
                )}
              </div>
              <div className="demo__info">
                <div>
                  <span>Dərs</span>
                  {loading ? (
                    <Skeleton variant="text" width="100%" height={20} />
                  ) : (
                    <p>{selectedTraining?.nümayislər?.title}</p>
                  )}
                </div>
                <div>
                  <span>Təlimçi</span>
                  {loading ? (
                    <Skeleton variant="text" width="100%" height={20} />
                  ) : (
                    <p>{selectedTraining?.nümayislər?.trainer}</p>
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
                    <p>{selectedTraining?.nümayislər?.info}</p>
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
            {loading
              ? [...Array(4)].map((_, index) => (
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
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={30}
                      />
                    </div>
                  </div>
                ))
              : selectedTraining?.sessiyalar?.map((training, index) => {
                const trainingInfo = trainingData[index];
                console.log(training.date,"data")
                if (!trainingInfo) return;
                  return (
                    <div className="table__card" key={index}>
                      <div
                        style={{ backgroundColor: trainingInfo.bgcolor }}
                        className="card__title"
                      >
                        <h3>{selectedTraining.title}</h3>
                      </div>
                      <div className="card__body">
                        <div className="card__time">
                          <FaCalendarAlt color={trainingInfo.bgcolor} />
                          <span>{formatDate(training.date)}</span>
                        </div>
                        <div className="training__price">
                          <p>
                            <span>{selectedTraining.money} AZN</span> 250 AZN
                          </p>
                        </div>
                      </div>
                      <div className="card__button">
                        <button style={{ backgroundColor: trainingInfo.bgcolor }}>
                          {/* {registerTexts[trainingInfo.language]} */}Qeydİyyatdan keç
                        </button>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>


      <Cluster />
    </div>
  );
};

export default Details;
