import PropTypes from "prop-types";

const DetailHeadSection = ({ data }) => {
  return (
    <>
      <section className="w-full  mx-auto px-2 md:px-5  lg:px-0  lg:w-5/6 mb-10">
        <div className="flex flex-col gap-10 tracking-wide">
          <div className="flex gap-4 items-center">
            <img
              src={data?.image}
              alt={data?.title}
              className="w-25 h-25 rounded-full border border-[2.5px] border-[#e7ce66]"
            />
            <h2 className="text-[26px] md:text-[40px]  font-[300] text-[#330033]">
              {data?.title}
            </h2>
          </div>
          <div>
            <h2 className="text-[18px] text-[#330033] ">
              {data?.description}
            </h2>
          </div>
        </div>
      </section>

      
    </>
  );
};
DetailHeadSection.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default DetailHeadSection;
