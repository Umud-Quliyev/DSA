import PropTypes from 'prop-types';
import Modals from "../Modal/Modals";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

const DetailTrainingSection = ({selectedTraining, trainingData, formatTime, addTime, formatDate, openModals, openModal, setOpenModals, selectedSession, closeModal}) => {
   
  return (
    <section>
        <div className=" w-full lg:w-5/6  mx-auto mb-10 px-2 md:px-5  lg:px-0">
          <div className="mb-10">
            <h2 className="text-[#330033] text-[24px]">Təlim Cədvəli</h2>
          </div>
          <div className="flex flex-wrap  xl:flex-nowrap  justify-center md:justify-between xl:justify-between  gap-5">
            {selectedTraining?.sessiyalar?.map((session, index) => {
              const trainingInfo = trainingData[index];
              if (!trainingInfo) return null;
              const startTime = session.hour;
              const endTime = addTime(startTime, 2, 55);
              return (
                <div
                  className="table__card lg:w-2/5 xl:w-full md:w-2/5 sm:w-2/5 w-full "
                  key={index}
                >
                  <div
                    style={{ backgroundColor: trainingInfo.bgcolor }}
                    className="card__title"
                  >
                    <h3>{selectedTraining.title}</h3>
                  </div>
                  <div className="card__body">
                    <div className="card__date">
                      <FaCalendarAlt color={trainingInfo.bgcolor} />
                      <p>
                        {formatDate(session.date)}
                      </p>
                    </div>
                    <div className="card__time">
                      <FaRegClock color={trainingInfo.bgcolor}/>
                      <p>
                        {`${formatTime(startTime)}-${formatTime(endTime)}`}
                      </p>
                    </div>
                  </div>
                  <div className="card__button">
                    <button
                      className="hover:opacity-80"
                      onClick={() => openModal(selectedTraining)}
                      style={{ backgroundColor: trainingInfo.bgcolor }}
                    >
                      Qeydiyyatdan keç
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {openModals && (
            <Modals
              setOpenModals={setOpenModals}
              session={selectedSession}
              closeModal={closeModal}
            />
          )}
        </div>
        </section>
  )
}
DetailTrainingSection.propTypes = {
  selectedTraining: PropTypes.object,
  trainingData: PropTypes.array,
  formatTime: PropTypes.func,
  addTime: PropTypes.func,
  formatDate: PropTypes.func,
  openModals: PropTypes.bool,
  openModal: PropTypes.func,
  setOpenModals: PropTypes.func,
  selectedSession: PropTypes.object,
  closeModal: PropTypes.func,
};

export default DetailTrainingSection;