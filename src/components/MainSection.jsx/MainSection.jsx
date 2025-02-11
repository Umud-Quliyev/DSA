import project from "../../assets/png/layiheler.png"
import career from "../../assets/png/karyera.png"
import community from "../../assets/png/community.png"
import edu from "../../assets/png/edu.png"
import mentor from "../../assets/png/mentor.png"
import practic from "../../assets/png/telim.png"
import { Link } from "react-router-dom"
const MainSection = () => {

  return (
    <>
      <section id="main" name="main">
        <div className=" text-[#fff]  flex  flex-col items-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 ">
          <h1 className="text-[3.91vw] font-[200]">12 Həftədə</h1>
          <h2 className="text-[3.91vw]  font-bold">Data Scientist Olmaq?</h2>
          <div className="bg-[#310d31] rounded-[10px] flex flex-col items-center  p-4">
            <span className="text-[#ffca05] text-[1.31vw]">
              Data Science Academy
            </span>
            <h3 className="text-[#ffca05] text-[2.61vw] font-extrabold ">
              BOOTCAMP
            </h3>
            <span className="text-[1.96vw] font-bold">1 Fevral 2025</span>
          </div>
          <span className="text-center text-[1.18vw]">
            En müasir tədris proqramı, <br /> real biznes layihələri və fərdi{" "}
            <br /> karyera dəstəyi əsasında <br /> bizimlə mümkündür!
          </span>
          <div className="flex gap-5 mx-auto pt-3">
            <Link to={"/muraciet"} className="text-center bg-[#2baaaa] rounded-[20px] text-[1.05vw] p-3  w-[12.6vw] hover:bg-transparent cursor-pointer">
              MURACIƏT ET
            </Link>
            <Link to={"/program"} className="text-center bg-[#2baaaa] rounded-[20px] text-[1.05vw] p-3 w-[12.6vw] hover:bg-transparent cursor-pointer">
              PROQRAMI YÜKLƏ
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-5/6 m-auto px-20 ">
          <h2 className="text-[#279996] text-[2.61vw] my-10">DSA Bootcamp</h2>
          <div className="flex  justify-between w-full">
            <div className="flex flex-col gap-3 w-4/5 text-[#555555]">
              <h2 className="font-bold text-[1.18vw]">İcmal</h2>
              <span className="pr-5">
                Data Science Academy Bootcamp Data Analitikası, Vizuallaşdırma,
                Machine Learning, Deep Learning, Artificial İntellegence və Big
                Data mövzularının birlikdə tədris edildiyi dünyanın ən geniş
                Data Science proqramlarından biridir. Siz bu proqramda
                Statistika, Data Analitikası və Data Science metodologiyalarını
                R, Python, Spark, Spark SQL, Spark MLlib, AWS, Hadoop, Mongo DB,
                MapReduce, Hive, Hadoop, Tenserflow, Tableau, SPSS, SPSS Modeler
                və digər çox istifadə olunanan vasitələrlə öyrənəcəksiniz.
                Vaxtınızın böyük hissəsində real layihələrlə işləyərək
                biliklərinizi tətbiq edəcək və proqram sonunda GitHub Data
                Science Portfolionuzu yaradacaqsınız. Şəxsi mentorlarınızla
                işləyərkən real biznes problemləri və datasetlərlə əlaqəli
                suallarınıza cavab tapmaq imkanınız olacaq. Bootcamp müddətində
                peşəkar Data Analitiklərdən ibarət olan Data Science
                cəmiyyətimizə qoşularaq Data Science Spacedə həyata keçirilən
                müxtəlif networking tədbirlərinə qoşulacaqsınız. Bootcamp
                sonunda imtahan nəticələrinə əsasasən Participant, Data Analyst,
                Junior Data Scientist, Data Scientist, Associate Data Scientist
                sertifikatlarından biri təqdim olunacaq. Bununla yanaşı,
                individual karyera xidməti və CV- Vakansiya* bazamıza giriş əldə
                edəcəksiniz.
              </span>
              <span className="">
                *Akademiyamız bir çox nüfuzlu yerli və qlobal şirkətlərə
                əməkdaşlıq əsasında data və analitika mütəxəssisləri təmin edir.
              </span>
            </div>
            <div className="flex flex-col justify-between w-1/5 text-[#555555]">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[1.18vw]">Ön bilik tələbi</h3>
                <span className="text-[.92vw]">
                  Orta səviyyə ingilis dili, analitikaya həvəs və təhlil
                  bacarığı
                </span>
                <span className="text-[.92vw]">
                  *İlkin proqramlaşdırma və təməl statistika biliklərinin olması
                  üstünlükdür.
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className=" font-bold text-[1.18vw]">Tədris Müddəti</h3>
                <span className="text-[.92vw]">
                  3 ay, həftədə 3 dəfə, hər dərs fasilələr ilə 4 saat davam
                  edəcək.
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className=" font-bold text-[1.18vw]">Məkan</h3>
                <span className="text-[.92vw]">
                  Aşıq Alı 24, Odlar Yurdu universiteti ilə üzbəüz
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/6 mx-auto mt-15">
            <button className=" bg-[#28AAA8] text-[#fff] py-3 px-10 rounded-[30px] cursor-pointer hover:bg-[#e2195b]">
              MÜRACİƏT ET
            </button>
          </div>
        </div>
      </section>

      <section className="my-20 second-main-section">
        <div className="flex flex-col items-center w-5/6 mx-auto px-20 text-[#555555]">
          <h2 className="text-[#212331] text-[2.61vw] font-[300]">Proqramın üstünlükləri</h2>
          <div className="flex justify-between gap-5 my-10 flex-wrap text-center main-div">
            <div className="flex flex-col items-center gap-2 w-[350px]  cursor-pointer sub-main-div">
              <img src={edu} alt="" className="w-[100px] bg-[#28AAA8] rounded-full"/>
              <h4 className="text-[1.18vw] font-bold"> Data Science Bootcamp</h4>
              <p className="text-[.92vw]">Data Science Academy sizə intensiv olaraq təşkil olunmuş 140 saatlıq proqram təklif edir.</p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[350px]  cursor-pointer sub-main-div">
              <img src={practic} alt="" className="w-[100px] bg-[#28AAA8] rounded-full "/>
              <h4 className="text-[1.18vw] font-bold">Təlim Proqramı</h4>
              <p  className="text-[.92vw] ">
              R, Python, Spark, Spark SQL, Spark MLlib, AWS, Hadoop, Mongo DB, MapReduce, Hive, Hadoop, Tenserflow, Tableau, SPSS, SPSS Modeler və digər çox istifadə olunanan proqramları birgə tədris edən yeganə proqram.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[350px]  cursor-pointer sub-main-div">
              <img src={mentor} alt="" className="w-[100px] bg-[#28AAA8] rounded-full"/>
              <h4 className="text-[1.18vw] font-bold">Mentor seçim prosesi
              </h4>
              <p  className="text-[.92vw]">
              Bootcamp müddətində tədris vaxtlarınızdan əlavə şəxsi mentorunuz ilə görüşərək bütün suallarınıza cavab tapın.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[350px]  cursor-pointer sub-main-div">
              <img src={project} alt="" className="w-[100px] bg-[#28AAA8] rounded-full"/>
              <h4 className="text-[1.18vw] font-bold">Layihələrimiz</h4>
              <p  className="text-[.92vw]">
                Capstone layihələri əsasında bilik və bacarıqlarınızı göstərən
                şəxsi Data Science GitHub portfolionuzu yaradın.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[350px] cursor-pointer sub-main-div">
              <img src={career} alt="" className="w-[100px] bg-[#28AAA8] rounded-full"/>
              <h4 className="text-[1.18vw] font-bold">Community</h4>
              <p  className="text-[.92vw]">
              Birə-bir karyera dəstəyi əsasında CV və Linkedin profilinizi dizayn etmək, sınaq müsahibələrlə müsahibədə necə davranmalı olduğunuzu öyrənmək və ekskluziv olaraq əməkdaşlıq etdiyimiz şirkətlərdə işləmək imkanı əldə edin.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[350px]  cursor-pointer sub-main-div">
              <img src={community} alt="" className="w-[100px] bg-[#28AAA8] rounded-full"/>
              <h4 className="text-[1.18vw] font-bold">Layihələrimiz</h4>
              <p  className="text-[.92vw]">
              Peşəkar Data Analitiklərdən ibarət olan Data Science cəmiyyətimizə qoşularaq Data Science Spacedə həyata keçirilən müxtəlif networking tədbirlərinə qoşulun.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
