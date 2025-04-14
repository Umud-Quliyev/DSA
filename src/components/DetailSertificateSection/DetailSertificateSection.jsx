
import PropTypes from 'prop-types';

const DetailSertificateSection = ({selectedTraining}) => {
  return (
    <section>
        <div className="flex items-center flex-col justify-between   lg:w-5/6  mx-auto my-10 px-2 md:px-5  lg:px-0">
          <div className="mb-5">
            <h1 className="text-[40px]  font-[400] text-[#330033] mb-5">
              Təlim haqqında məlumat
            </h1>
            <p className="text-[18px]  font-[400] text-[#330033]">
              {selectedTraining?.information}
            </p>
          </div>
          <div className="flex justify-between items-center lg:flex-row flex-col">
            <div className="flex flex-col gap-10 lg:w-4/5 xl:w-1/2">
              <div>
                <h1 className="text-[40px]  font-[400] text-[#330033] mb-5">
                  Bu təlim kimlər üçündür?
                </h1>
                <p className="text-[18px]  font-[400] text-[#330033]">
                  {selectedTraining?.for_who}
                </p>
              </div>
              <div className="">
                <h1 className="text-[40px]  font-[400] text-[#330033] mb-5">
                  Sertifikat
                </h1>
                <p className="text-[18px]  font-[400] text-[#330033]">
                  {selectedTraining?.certificates}
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-10/12 xl:w-2/5 mt-5 lg:mt-0">
              <img
                src={selectedTraining?.certificate_image}
                alt="sertifikat"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
)
}
DetailSertificateSection.propTypes = {
  selectedTraining: PropTypes.shape({
    information: PropTypes.string,
    for_who: PropTypes.string,
    certificates: PropTypes.string,
    certificate_image: PropTypes.string,
  }),
};

export default DetailSertificateSection;
