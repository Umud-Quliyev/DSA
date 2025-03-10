import PropTypes from "prop-types";

const DetailTrainerSection = ({ selectedTraining }) => {
  return (
    <section>
      <div className="w-full mx-auto lg:w-5/6 py-10 px-2 md:px-5  lg:px-0">
        <div className="trainers__title">
          <h2>Təlimçilər</h2>
        </div>
        <div className="trainers__list ">
          {selectedTraining?.trainers?.length > 0 ? (
            selectedTraining.trainers.map((info, index) => (
              <div
                key={index}
                className="flex gap-5 flex-col md:flex-row items-center"
              >
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
    </section>
  );
};
DetailTrainerSection.propTypes = {
  selectedTraining: PropTypes.shape({
    trainers: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        work_location: PropTypes.string,
        info: PropTypes.string,
      })
    ),
  }),
};

export default DetailTrainerSection;
