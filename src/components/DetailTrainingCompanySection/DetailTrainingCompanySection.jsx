
const DetailTrainingCompanySection = () => {
    const handleIconClick = (target) => {
        document.querySelector(target).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
  return (
    <section>
        <div className="training__company ">
          <div className="flex items-center justify-between  flex-col md:flex-row lg:w-5/6  mx-auto px-2 md:px-5  lg:px-0">
            <p className="text-white py-6 tracking-wide text-[18px]">
              Klaster kampanyasına qeydiyyatdan keçərək daha çox qənaət edin!
            </p>
            <button
              className="sm:w-1/2 md:w-2/6 lg:w-1/4 xl:w-1/5 sm:mb-0 mb-5 text-[14px] hover:opacity-80"
              onClick={() => handleIconClick("#cluster")}
            >
              KLASTER KAMPANİYASI
            </button>
          </div>
        </div>
      </section>
  )
}

export default DetailTrainingCompanySection