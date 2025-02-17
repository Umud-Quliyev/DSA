import project from "../../assets/png/layiheler.png";
import career from "../../assets/png/karyera.png";
import community from "../../assets/png/community.png";
import edu from "../../assets/png/edu.png";
import mentor from "../../assets/png/mentor.png";
import practic from "../../assets/png/telim.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="main"
        name="main"
        className="h-[50vh] sm:h-[50vh]  md:h-[50vh] lg:h-[80vh] xl:h-[100vh]"
      >
        <div className="text-[#fff] flex flex-col items-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
          <h1 className="font-[300] text-[5vw] md:text-[3.91vw]">
            {t("bootcamp_title")}
          </h1>
          <h2 className="text-nowrap text-[6vw] font-bold md:text-[3.85vw]">
            {t("bootcamp_subtitle")}
          </h2>
          <div className="bg-[#310d31] rounded-[10px] flex flex-col items-center p-4">
            <span className="text-[#ffca05] text-[2vw] md:text-[1.31vw]">
              {t("bootcamp_name")}
            </span>
            <h3 className="text-[#ffca05] text-[4vw] font-extrabold md:text-[2.54vw] uppercase">
              {t("bootcamp")}
            </h3>
            <span className="text-[2.5vw] font-bold md:text-[2vw]">
              {t("bootcamp_start_date")}
            </span>
          </div>
          <span className="text-center text-[1.9vw] md:text-[1.18vw] max-w-60">
            {t("bootcamp_description")}
          </span>
          <div className="flex gap-5 mx-auto pt-3">
            <Link
              to={"/muraciet"}
              className="text-center text-nowrap bg-[#2baaaa] rounded-[20px] text-[2vw] py-3 px-10 w-full hover:bg-transparent cursor-pointer md:text-[1vw] md:w-2/4"
            >
              {t("apply_now")}
            </Link>
            <Link
              to={"/program"}
              className="text-center text-nowrap bg-[#2baaaa] rounded-[20px] text-[2vw] py-3 px-10 w-full hover:bg-transparent cursor-pointer md:text-[1vw] md:w-2/4"
            >
              {t("download_program")}
            </Link>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="w-full mx-auto  px-10 md:w-5/6 md:px-20 md:mx-auto">
          <h2 className="text-[#279996] text-[4vw] my-5 md:text-[2.61vw] md:my-10">
            DSA {t("bootcamp_type")}
          </h2>
          <div className="flex flex-wrap justify-between w-full">
            <div className="flex flex-col gap-3 w-full text-[#555555] md:w-4/5">
              <h2 className="font-bold text-[3vw] md:text-[1.18vw]">
                {t("overview")}
              </h2>
              <span className="text-[3vw] sm:text-[1.18vw] md:text-[1.18vw] md:pr-5">
                {t("overview_text")}
              </span>
              <span className="text-[3vw] sm:text-[1.18vw] md:text-[1.18vw]">
                {t("overview_sub_text")}
              </span>
            </div>
            <div className="flex pt-1 justify-between w-full text-[#555555] md:w-1/5 md:flex-col">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[2.5vw] md:text-[1.18vw]">
                  {t("requirements")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[1.18vw] w-4/5">
                  {t("requirements_description")}
                </span>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[1.18vw] w-4/5">
                  {t("extra_requirements")}
                </span>
              </div>
              <div className="flex  flex-col gap-2 ">
                <h3 className=" font-bold text-[2.5vw] md:text-[1.18vw]">
                  {t("duration")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] w-4/5 md:text-[1.18vw]">
                  {t("duration_description")}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className=" font-bold text-[2.5vw] md:text-[1.18vw]">
                  {t("location")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] w-4/5 md:text-[1.18vw]">
                  {t("location_description")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-15  md:w-full">
            <button className=" text-[1.5vw] md:text-[1vw] text-nowrap text-center  bg-[#28AAA8] text-[#fff] py-3 px-10  rounded-[30px] cursor-pointer hover:bg-[#e2195b]">
              {t("apply_now")}
            </button>
          </div>
        </div>
      </section>

      <section className="my-20 second-main-section">
        <div className="flex flex-col items-center w-full mx-auto px-10 text-[#555555] md:5/6 md:px-20 md:flex-col">
          <h2 className="text-[#212331] text-[4vw] font-[300] md:text-[2.61vw]">
            {t("program_advantages")}
          </h2>
          <div className="flex  gap-5 my-10 flex-wrap text-center main-div justify-between md:w-5/6">
            <div className="flex flex-col items-center gap-2  w-[45%] cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={edu}
                alt=""
                className="w-[100px] bg-[#28AAA8] rounded-full"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("data_science_bootcamp")}
              </h4>
              <p className="text-[1.5vw] md:text-[.92vw]">
                {t("data_science_bootcamp_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2  w-[45%] cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={practic}
                alt=""
                className="w-[100px] bg-[#28AAA8] rounded-full "
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("training_program")}
              </h4>
              <p className="text-[1.5vw] md:text-[.92vw] ">
                {t("training_program_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={mentor}
                alt=""
                className="w-[100px] bg-[#28AAA8] rounded-full"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("mentor_selection")}
              </h4>
              <p className="text-[1.5vw] md:text-[.92vw]">
                {t("mentor_selection_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={project}
                alt=""
                className="w-[100px] bg-[#28AAA8] rounded-full"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("projects")}
              </h4>
              <p className="text-[1.5vw] md:text-[.92vw]">
                {t("projects_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%] cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={career}
                alt=""
                className="w-[100px] bg-[#28AAA8] rounded-full"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("career_support")}
              </h4>
              <p className="text-[1.5vw] md:text-[.92vw]">
                {t("career_support_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={community}
                alt=""
                className="w-[100px] bg-[#28AAA8] rounded-full"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("community")}
              </h4>
              <p className="text-[1.5vw] md:text-[.92vw]">
                {t("community_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
