import "./Training.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Training = () => {
  const { t } = useTranslation();

/*   const clickHandle = (e) => {
    e.preventDefault();
    window.open(program, "_blank");
  }; */

  return (
    <>
      <section id="training" name="training">
        <div className="contanierr">
          <div className="training_program_info">
            <h2>{t("training_program")}</h2>
            <p>{t("training_info")}</p>
            <NavLink to="/program">{t("training_download")}</NavLink>
          </div>
        </div>
        <div className="training__program">
          <div className="contanierr">
            <div className="program__title">
              <h2 >{t("training_process_title")}</h2>
            </div>
            <div className="training__process">
              <div className="process">
                <div className="process__numb">
                  <span>01</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_1")}</p>
                </div>
                <div className="process__desc">
                  <p >{t("training_step_1_desc")}</p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>02</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_2")}</p>
                </div>
                <div className="process__desc">
                  <p >{t("training_step_2_desc")}</p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>03</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_3")}</p>
                </div>
                <div className="process__desc">
                  <p >{t("training_step_3_desc")}</p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>04</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_4")}</p>
                </div>
                <div className="process__desc">
                  <p >{t("training_step_4_desc")}</p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>05</span>
                </div>
                <div className="process__title">
                  <p>{t("training_step_5")}</p>
                </div>
                <div className="process__desc">
                  <p >{t("training_step_5_desc")}</p>
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
