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
        console.log(result,"asd");

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
        className=" h-[50vh] sm:h-[50vh]  md:h-[50vh] lg:h-[80vh] xl:h-[100vh]"
      >
        <div className="text-[#fff]  flex flex-col items-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
          <h1 className="font-[300] text-[5vw] md:text-[3.91vw]">
            {t("bootcamp_title")}
          </h1>
          <h2 className="text-nowrap text-[6vw] font-bold md:text-[3.91vw]">
            {t("bootcamp_subtitle")}
          </h2>
          <div className="bg-[#310d31] rounded-[10px] flex flex-col items-center p-4 mb-2">
            <span className="text-[#ffca05] text-[2vw] md:text-[1.31vw] font-[400]">
              {t("bootcamp_name")}
            </span>
            <h3 className="text-[#ffca05] text-[4vw] font-extrabold md:text-[2.54vw] uppercase">
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
              <span className="text-[2.5vw] font-[900] md:text-[2vw]">
                {startDate}
              </span>
            )}
          </div>
          <span className="text-center text-[1.9vw] md:text-[1.18vw] w-[35%] sm:w-[40%]  md:w-[35%] lg:w-[35%] xl:w-60">
            {t("bootcamp_description")}
          </span>
          <div className="flex  gap-5 mx-auto pt-3">
            <Link
              to={"/muraciet"}
              className=" flex  justify-center text-nowrap bg-[#2baaaa] rounded-[20px] text-[2vw] py-3  px-7 hover:bg-transparent cursor-pointer md:text-[1vw] "
            >
              {t("apply_now")}
            </Link>
            <Link
              to={"/program"}
              className=" flex  justify-center text-nowrap bg-[#2baaaa] rounded-[20px] text-[2vw] py-3  px-5 hover:bg-transparent cursor-pointer md:text-[1vw]"
            >
              {t("download_program")}
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-full mx-auto  px-5 md:w-5/6 md:px-20  ">
          <h2 className="text-[#279996] text-[4vw] my-5 md:text-[2.61vw] md:my-10">
            DSA {t("bootcamp_type")}
          </h2>
          <div className="flex flex-wrap gap-5 md:gap-0 md:justify-between  h-auto  ">
            <div className="flex flex-col gap-3 w-full text-[#555555] md:w-4/5  lg:leading-[30px] ">
              <h2 className="font-bold text-[3vw] md:text-[1.2vw]">
                {t("overview")}
              </h2>
              <span className=" text-[3vw] sm:text-[2.1vw] md:text-[1.1vw] pr-10 tracking-wide">
                {t("overview_text")}
              </span>
              <span className="text-[3vw] sm:text-[2.1vw] md:text-[1.1vw] pr-10 tracking-wide">
                {t("overview_sub_text")}
              </span>
            </div>
            <div className="flex  justify-between  w-full text-[#555555]  md:w-1/5 md:flex-col tracking-wide lg:leading-[25px]">
              <div className="flex  flex-col md:gap-3 lg:gap-5 gap-3">
                <h3 className="font-bold text-[2.5vw] md:text-[1.2vw]">
                  {t("requirements")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[1vw] w-4/5">
                  {t("requirements_description")}
                </span>
                <span className="text-[2.5vw] sm:text-[2vw] md:text-[1vw] w-4/5">
                  {t("extra_requirements")}
                </span>
              </div>
              <div className="flex  flex-col  md:gap-1 gap-3">
                <h3 className=" font-bold text-[2.5vw] md:text-[1.1vw]">
                  {t("duration")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] w-4/5 md:text-[1vw]">
                  {t("duration_description")}
                </span>
              </div>
              <div className="flex flex-col md:gap-1 gap-3">
                <h3 className=" font-bold text-[2.5vw] md:text-[1vw]">
                  {t("location")}
                </h3>
                <span className="text-[2.5vw] sm:text-[2vw] w-4/5 md:text-[1vw]">
                  {t("location_description")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-15  md:w-full">
            <Link
              to={"/muraciet"}
              className=" text-[2.5vw] md:text-[1vw] text-nowrap text-center  bg-[#28AAA8] text-[#fff] py-3 px-10  rounded-[30px] cursor-pointer hover:bg-[#e2195b]"
            >
              {t("apply_now")}
            </Link>
          </div>
        </div>
      </section>

      <section className="my-20 second-main-section ">
        <div className="flex flex-col  items-center w-full mx-auto px-5 text-[#555555] md:w-5/6 md:px-10 lg:px-10">
          <h2 className="text-[#212331] text-[5vw] font-[300] md:text-[2.61vw]">
            {t("program_advantages")}
          </h2>
          <div className="flex  justify-around gap-5 my-10 flex-wrap text-center main-div ">
            <div className="flex flex-col items-center gap-2  w-[45%] cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={edu}
                alt="edu"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("data_science_bootcamp")}
              </h4>
              <p className="text-[2.5vw] md:text-[1vw] sm:text-[2vw]">
                {t("data_science_bootcamp_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2  w-[45%] cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={practic}
                alt="practic"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("training_program")}
              </h4>
              <p className="text-[2.5vw] md:text-[1vw] sm:text-[2vw]">
                {t("training_program_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={mentor}
                alt="mentor"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("mentor_selection")}
              </h4>
              <p className="text-[2.5vw] md:text-[1vw] sm:text-[2vw]">
                {t("mentor_selection_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={project}
                alt="project"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("projects")}
              </h4>
              <p className="text-[2.5vw] md:text-[1vw] sm:text-[2vw]">
                {t("projects_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%] cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={career}
                alt="career"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw]">
                {t("career_support")}
              </h4>
              <p className="text-[2.5vw] md:text-[1vw] sm:text-[2vw]">
                {t("career_support_desc")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[45%]  cursor-pointer sub-main-div md:w-[25%]">
              <img
                src={community}
                alt="community"
                className="w-[80px] bg-[#28AAA8] rounded-full md:w-[90px] lg:w-[100px]"
              />
              <h4 className="text-[2.5vw] font-bold md:text-[1.18vw] ">
                {t("community")}
              </h4>
              <p className="text-[2.5vw] md:text-[1vw] sm:text-[2vw]">
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
