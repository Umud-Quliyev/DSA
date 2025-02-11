import React from "react";
import "./Training.css";

const Training = () => {
  return (
    <>
      <div name="training">
        <div className="contanierr">
          <div className="training_program_info">
            <h2>Təlim Proqramı</h2>
            <p>
              Elektron Hökumətin İnkişafı Mərkəzi, Paşa Bank, Bakcell,
              Beynəlxalq Bank və Access Bank kimi iri qurumlarda çalışan
              mütəxəssislərimiz tərəfindən seçilmiş kitablar, real biznes və
              analitika keyzləri əsasında yaradılmışdır. Proqram bazardakı
              trendlər və biznesin tələbləri nəzərə alınaraq müntəzəm yenilənir.
              Bu proqram Statistika, Data Analitikası və Data Science
              metodologiyalarını R, Python, Spark, Spark SQL, Spark MLlib, AWS,
              Hadoop, Mongo DB, MapReduce, Hive, Hadoop, Tenserflow, Tableau,
              SPSS, SPSS Modeler öyrədilməsi daxil olmaqla 140 saatlıq tədris
              məzmununu əhatə edəcəkdir.
            </p>
            <button>Təlİm proqramını yükləyİn</button>
          </div>
        </div>
        <div className="training__program">
          <div className="contanierr">
            <div className="program__title">
              <h2>Proses necə işləyir?</h2>
            </div>
            <div className="training__process">
              <div className="process">
                <div className="process__numb">
                  <span>01</span>
                </div>
                <div className="process__title">
                  <p>İlkin Hazırlıq</p>
                </div>
                <div className="process__desc">
                  <p>
                    Bootcamp başlamazdan əvvəl bilik və bacarıqlarınız test
                    olunaraq uyğun təlim proqramlarına yönləndiriləcəksiniz.
                  </p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>02</span>
                </div>
                <div className="process__title">
                  <p>Bootcamp</p>
                </div>
                <div className="process__desc">
                  <p>
                    Data Analitikası, Vizuallaşdırma, Machine Learning, Deep
                    Learning, Artificial İntellegence, Big Data mövzularını
                    dünyanın ən geniş Data Science tədris proqramlarından biri
                    ilə öyrənəcəksiniz.
                  </p>
                </div>
              </div>
              <div className="process ">
                <div className="process__numb processbf__numb">
                  <span>03</span>
                </div>
                <div className="process__title">
                  <p>Tətbiq</p>
                </div>
                <div className="process__desc">
                  <p>
                    Şəxsi mentorunuz ilə bərabər real layihələr üzərində
                    çalışaraq öyrəndiyiniz bilikləri tətbiq edəcəksiniz.
                  </p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>04</span>
                </div>
                <div className="process__title">
                  <p>Karyera</p>
                </div>
                <div className="process__desc">
                  <p>
                    Peşəkar Data analitiklər və HR mütəxəsisləri ilə görüşüb
                    birə-bir müzakirələr aparacaq və CV-Vakansiya bazasına giriş
                    əldə edəcəksiniz.
                  </p>
                </div>
              </div>
              <div className="process">
                <div className="process__numb processbf__numb">
                  <span>05</span>
                </div>
                <div className="process__title">
                  <p>Təbriklər!</p>
                </div>
                <div className="process__desc">
                  <p>Dünya yeni Data Scientist qazandı.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
