import { FaCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const DetailSessionSection = ({
  selectedTraining,
  trainingData,
  formatDate,
  openModal,
}) => {
  return (
    <section>
      <div className="w-full mx-auto lg:w-5/6 py-10 px-2 md:px-5  lg:px-0">
        <div className="tables__title pt-10 pb-5">
          <h2 className="text-[#330033] text-[26px] font-bold">Sessiyalar</h2>
        </div>
        <div className="table__list flex flex-wrap  xl:flex-nowrap  justify-center md:justify-between xl:justify-between  gap-5  ">
          {selectedTraining?.sessiyalar?.map((training, index) => {
            const trainingInfo = trainingData[index];
            if (!trainingInfo) return;
            return (
              <div className="table__card lg:w-2/5 xl:w-full md:w-2/5 sm:w-2/5 w-full" key={index}>
                <div
                  style={{ backgroundColor: trainingInfo.bgcolor }}
                  className="card__title"
                >
                  <h3>{selectedTraining.title}</h3>
                </div>
                <div className="card__body ">
                  <div className="card__time  justify-center border-b-2 border-[lightgray]">
                    <FaCalendarAlt color={trainingInfo.bgcolor} />
                    <span className="text-[20px]">{formatDate(training.date)}</span>
                  </div>
                  <div className="training__price text-center">
                    <p>
                      <span>500 AZN</span> {selectedTraining.money} AZN
                    </p>
                  </div>
                </div>
                <div className="card__button">
                  <button
                    style={{ backgroundColor: trainingInfo.bgcolor }}
                    onClick={() => openModal(selectedTraining)}
                  >
                    Qeydİyyatdan keç
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
DetailSessionSection.propTypes = {
  selectedTraining: PropTypes.object,
  trainingData: PropTypes.array,
  formatTime: PropTypes.func,
  addTime: PropTypes.func,
  formatDate: PropTypes.func,
  openModal: PropTypes.func,
};

export default DetailSessionSection;
