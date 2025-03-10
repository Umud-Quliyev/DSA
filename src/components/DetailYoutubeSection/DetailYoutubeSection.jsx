import PropTypes from "prop-types";

const DetailYoutubeSection = ({ selectedTraining }) => {
  return (
    <section className="bg-[#3b378b] text-white py-8 px-2 md:px-5  lg:px-0">
      <div className="flex  flex-col justify-between lg:w-5/6  mx-auto my-10 tracking-wide">
        <div className="mb-5">
          <h1 className="text-[26px] font-bold">Nümayiş dərsi </h1>
        </div>
        <div className="flex lg:flex-row flex-col  gap-5 ">
          <div className=" relative w-full h-[250px] sm:h-[300px]  md:h-[374px] lg:w-[630px] lg:h-[400px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${selectedTraining?.nümayislər?.link}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-between gap-5  md:w-2/3 lg:w-1/2 ">
            <h2 className=" text-[40px]">{selectedTraining?.title}</h2>
            <div>
              <span className="text-[#22c4cd] text-[18px]">Dərs</span>
              <p className="text-[20px]">
                {selectedTraining?.nümayislər?.title}
              </p>
            </div>
            <div>
              <span className="text-[#22c4cd] text-[18px]">Təlimçi</span>
              <p className="text-[20px]">
                {selectedTraining?.nümayislər?.trainer}
              </p>
            </div>
            <div>
              <span className="text-[#22c4cd] text-[18px]">Məlumat</span>
              <p className="text-[20px]">
                {selectedTraining?.nümayislər?.info}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
DetailYoutubeSection.propTypes = {
  selectedTraining: PropTypes.shape({
    title: PropTypes.string,
    nümayislər: PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
      trainer: PropTypes.string,
      info: PropTypes.string,
    }),
  }),
};

export default DetailYoutubeSection;
