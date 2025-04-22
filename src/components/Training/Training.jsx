import "./Training.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Training = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="training" name="training">
        <div className="contanierr">
          <div className="training_program_info">
            <h2
              className="text-[#212331]"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              {t("training_program")}
            </h2>
            <p data-aos="fade-up" data-aos-duration="400">
              {t("training_info")}
            </p>
            <Link
              className=" text-[2.5vw] sm:text-[20px]"
              to="/program"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              {t("training_download")}
            </Link>
          </div>
        </div>
        <div className="training__program">
          <div className="contanierr">
            <div className="program__title">
              <h2 data-aos="fade-up">{t("training_process_title")}</h2>
            </div>
            <div className="training__process " >
              <div className="process" data-aos="fade" data-aos-duration="500" data-aos-delay="50">
                <div className="process__numb">
                  <span>01</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_1")}</p>
                </div>
                <div className="process__desc">
                  <p>{t("training_step_1_desc")}</p>
                </div>
              </div>
              <div className="process" data-aos="fade" data-aos-duration="1000" data-aos-delay="100">
                <div className="process__numb processbf__numb">
                  <span>02</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_2")}</p>
                </div>
                <div className="process__desc">
                  <p>{t("training_step_2_desc")}</p>
                </div>
              </div>
              <div className="process" data-aos="fade" data-aos-duration="1500" data-aos-delay="150">
                <div className="process__numb processbf__numb">
                  <span>03</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_3")}</p>
                </div>
                <div className="process__desc">
                  <p>{t("training_step_3_desc")}</p>
                </div>
              </div>
              <div className="process" data-aos="fade" data-aos-duration="2000" data-aos-delay="200">
                <div className="process__numb processbf__numb">
                  <span>04</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_4")}</p>
                </div>
                <div className="process__desc">
                  <p>{t("training_step_4_desc")}</p>
                </div>
              </div>
              <div className="process" data-aos="fade" data-aos-duration="2500" data-aos-delay="250">
                <div className="process__numb processbf__numb">
                  <span>05</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_5")}</p>
                </div>
                <div className="process__desc">
                  <p>{t("training_step_5_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
