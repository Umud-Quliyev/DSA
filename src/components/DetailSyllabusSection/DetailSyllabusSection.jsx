import PropTypes from "prop-types";

const DetailSyllabusSection = ({ selectedTraining }) => {
  return (
    <section className="bg-[#f1f3f2]">
      <div className="w-full  mx-auto  lg:w-5/6 pb-10 px-2 md:px-5  lg:px-0">
        <div className="pt-10 pb-5">
          <h2 className="text-[#330033] text-[26px] font-bold">Sillabus</h2>
        </div>
        <div className="flex  flex-wrap justify-between gap-5">
          {selectedTraining?.syllabus?.length > 0 ? (
            selectedTraining.syllabus.map((info, index) => (
              <div
                key={index}
                className="syllabus__item  w-full lg:w-[48.8%] xl:w-[49%] p-6 bg-white rounded-lg shadow-md"
              >
                {info.title && (
                  <div className="session__info">
                    <h3 className="text-[#330033]">
                      <strong>{info.title}</strong>
                    </h3>
                    <ul>
                      {info.description
                        ?.split(/\r\n/)
                        .filter((item) => item.trim() !== "")
                        .map((item, idx) => (
                          <li key={idx} className="text-[#330033] text-[20px]">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {info.information && (
                  <div className="case__info">
                    <h3 className="text-[#330033]">
                      <strong>{info.label}</strong>
                    </h3>
                    <ul>
                      {info.information
                        ?.split(/\r\n/)
                        .filter((item) => item.trim() !== "")
                        .map((item, idx) => (
                          <li key={idx} className="text-[#330033] text-[20px]">
                            {item}
                          </li>
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
    </section>
  );
};
DetailSyllabusSection.propTypes = {
  selectedTraining: PropTypes.shape({
    syllabus: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        information: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
};

export default DetailSyllabusSection;
