import project from "../../assets/png/layiheler.png";
import career from "../../assets/png/karyera.png";
import community from "../../assets/png/community.png";
import edu from "../../assets/png/edu.png";
import mentor from "../../assets/png/mentor.png";
import practic from "../../assets/png/telim.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { format, isDate, parse } from "date-fns";
import { az, enUS } from "date-fns/locale";
import { Box, Skeleton } from "@mui/material";
const MainSection = () => {
  const { t, i18n } = useTranslation();
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchTrainings = async () => {
      setLoading(true);
      try {
        const data = await fetch(`${BASE_URL}/metinler/`);
        const result = await data.json();

        const training = result.find(
          (t) => t.title === "Data Science üçün Python Proqramlaşdırma"
        );
        if (training && training.sessiyalar && training.sessiyalar.length > 0) {
          const rawDate = training.sessiyalar[0]?.date;

          if (rawDate) {
            const parsedDate = parse(rawDate, "yyyy-MM-dd", new Date());
            if (isDate(parsedDate)) {
              const currentLocale = i18n.language === "az" ? az : enUS;
              const formattedStartDate = format(parsedDate, "d MMMM yyyy", {
                locale: currentLocale,
              });
              setStartDate(formattedStartDate);
            } else {
              console.error("Geçersiz tarih formatı:", rawDate);
            }
          }
        } else {
          console.error("Sessiyon verisi bulunamadı.");
        }
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
      setLoading(false);
    };

    fetchTrainings();
  }, [BASE_URL, i18n.language]);

  return (
    <>
      <section
        id="main"
        name="main"
        className=" h-[100vh] sm:h-[100vh]  md:h-[100vh] lg:h-[100vh] xl:h-[100vh]"
      >
        <div className="text-[#fff]  flex flex-col items-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
          <h1 className="font-[300] text-[5vw] lg:text-[54px] xl:text-[60px] leading-11">
            {t("bootcamp_title")}
          </h1>
          <h2  className="text-nowrap text-[6vw]  lg:text-[54px] xl:text-[60px] font-[700]">
            {t("bootcamp_subtitle")}
          </h2>
          <div className="bg-[#310d31] rounded-[10px] flex flex-col items-center p-4 mb-2">
            <span className="text-[#ffca05] text-[2vw] lg:text-[18px] xl:text-[20px] font-[300] leading-3">
              {t("bootcamp_name")}
            </span>
            <h3 className="text-[#ffca05] text-[4vw]  lg:text-[36px] xl:text-[40px] uppercase font-[900]">
              {t("bootcamp")}
            </h3>
            
            {loading ? (
              <Box sx={{ width: 200 }}>
                <Skeleton
                  animation="wave"
                  sx={{ backgroundColor: "#e0e0e0", height: 50 }}
                />
              </Box>
            ) : (
              <span className="text-[2.5vw] font-[600] lg:text-[27px] md:text-[30px]">
                {startDate}
              </span>
            )}
          </div>
          <span className=" font-[400] text-center text-[1.9vw] md:text-[16px] w-[35%] sm:w-[40%]  md:w-[35%] lg:w-[35%] xl:w-60">
            {t("bootcamp_description")}
          </span>
          <div className="flex items-center justify-center gap-5 mx-auto pt-3 w-full">
            <Link
              to={"/muraciet"}
              className="flex  justify-center text-nowrap bg-[#2baaaa] rounded-[24px] text-[2vw] py-3  hover:bg-transparent cursor-pointer md:text-[14px]  w-2/6 lg:w-1/4"
            >
              {t("apply_now")}
            </Link>
            <Link
              to={"/program"}
              className="flex  justify-center text-nowrap bg-[#2baaaa] rounded-[24px] text-[2vw] py-3  hover:bg-transparent cursor-pointer md:text-[14px] w-2/6 lg:w-1/4"
            >
              {t("download_program")}
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" mx-auto   px-10 lg:w-5/6 lg:px-5 xl:px-0 2xl:px-20 h-auto">
          <h2 className="text-[#279996] text-[4vw] my-5 md:text-[40px] md:my-10 font-[300]">
            DSA {t("bootcamp_type")}
          </h2>
          <div className="flex flex-wrap  gap-5 md:gap-0 md:justify-between">
            <div className="flex flex-col gap-5 w-full text-[#555555] md:w-4/5  lg:leading-[26px] ">
              <h2 className="font-bold text-[3vw] md:text-[18px]">
                {t("overview")}
              </h2>
              <span className=" text-[3vw] sm:text-[2.1vw] md:text-[16px] md:pr-15 tracking-wide">
                {t("overview_text")}
              </span>
              <span className="text-[3vw] sm:text-[2.1vw] md:text-[16px]  md:pr-15 tracking-wide">
                {t("overview_sub_text")}
              </span>
            </div>
            <div className="flex  gap-14   w-full text-[#555555]  md:w-1/5 md:flex-col tracking-wide lg:leading-[20px]">
              <div className="flex  flex-col md:gap-3 lg:gap-7 gap-3">
                <h3 className="font-bold text-[2.5vw] md:text-[18px]">
                  {t("requirements")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[14px]">
                  {t("requirements_description")}
                </span>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[14px] ">
                  {t("extra_requirements")}
                </span>
              </div>
              <div className="flex  flex-col  md:gap-3 gap-3 w-full">
                <h3 className=" font-bold text-[2.5vw] md:text-[18px]">
                  {t("duration")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw]  md:text-[14px]">
                  {t("duration_description")}
                </span>
              </div>
              <div className="flex flex-col md:gap-3 gap-3 ">
                <h3 className=" font-bold text-[2.5vw] md:text-[18px] ">
                  {t("location")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[14px]">
                  {t("location_description")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-15  md:w-full">
            <Link
              to={"/muraciet"}
              className=" text-[2.5vw] md:text-[16px] text-nowrap text-center  bg-[#28AAA8] text-[#fff] py-3 px-10  rounded-[30px] cursor-pointer  duration-500 ease-in-out hover:bg-[#e2195b]"
            >
              {t("apply_now")}
            </Link>
          </div>
        </div>
      </section>

      <section className="my-20 second-main-section ">
        <div className="flex flex-col  items-center  mx-auto text-[#555555]  px-5 lg:w-5/6 md:px-10 lg:px-5 xl:px-0 2xl:px-20">
          <h2 className="text-[#212331] text-[5vw] font-[300] md:text-[40px]">
            {t("program_advantages")}
          </h2>
          <div className="flex justify-between  gap-5 my-10 flex-wrap text-center main-div ">
            <div className="flex flex-col items-center gap-2  w-[45%] cursor-pointer sub-main-div md:w-[32%] ">
              <img
                src={edu}
                alt="edu"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[18px]">
                {t("data_science_bootcamp")}
              </h4>
              <p className="text-[2.5vw] md:text-[14px] sm:text-[14px]">
                {t("data_science_bootcamp_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2  w-[45%] cursor-pointer sub-main-div md:w-[32%] ">
              <img
                src={practic}
                alt="practic"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[18px]">
                {t("training_program")}
              </h4>
              <p className="text-[2.5vw] md:text-[14px] sm:text-[14px]">
                {t("training_program_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[32%] ">
              <img
                src={mentor}
                alt="mentor"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[18px]">
                {t("mentor_selection")}
              </h4>
              <p className="text-[2.5vw] md:text-[14px] sm:text-[14px]">
                {t("mentor_selection_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[32%] ">
              <img
                src={project}
                alt="project"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[18px]">
                {t("projects")}
              </h4>
              <p className="text-[2.5vw] md:text-[14px] sm:text-[14px]">
                {t("projects_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%] cursor-pointer sub-main-div md:w-[32%] ">
              <img
                src={career}
                alt="career"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[18px]">
                {t("career_support")}
              </h4>
              <p className="text-[2.5vw] md:text-[14px] sm:text-[14px]">
                {t("career_support_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[32%] ">
              <img
                src={community}
                alt="community"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[18px] ">
                {t("community")}
              </h4>
              <p className="text-[2.5vw] md:text-[14px] sm:text-[14px]">
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
