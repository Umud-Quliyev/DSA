import { Link } from "react-router-dom";

const TrainingProgram = () => {
  const steps = [
    {
      id: 1,
      title: "İlkin Hazırlıq",
      description:
        "Bootcamp başlamazdan əvvəl bilik və bacarıqlarınız test olunaraq uyğun təlim proqramlarına yönləndiriləcəksiniz.",
    },
    {
      id: 2,
      title: "Bootcamp",
      description:
        "Data Analitikası, Vizuallaşdırma, Machine Learning, Deep Learning, Artificial Intelligence, Big Data mövzularını dünyanın ən geniş Data Science tədris proqramlarından biri ilə öyrənəcəksiniz.",
    },
    {
      id: 3,
      title: "Tətbiq",
      description:
        "Şəxsi mentorunuz ilə bərabər real layihələr üzərində çalışaraq öyrəndiyiniz bilikləri tətbiq edəcəksiniz.",
    },
    {
      id: 4,
      title: "Karyera",
      description:
        "Peşəkar Data analitiklər və HR mütəxəssisləri ilə görüşüb müzakirələr aparacaq və CV-Vakansiya bazasına giriş əldə edəcəksiniz.",
    },
    {
      id: 5,
      title: "Təbriklər!",
      description: "Dünya yeni Data Scientist qazandı.",
    },
  ];

  return (
    <section id="training" className="bg-gray-100 text-gray-900 flex flex-col justify-center items-center">
      <div className="container">
        {/* Training Program Section */}
        <div className="max-w-5xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Təlim Proqramı
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center">
            Elektron Hökumətin İnkişafı Mərkəzi, Paşa Bank, Bakcell, Beynəlxalq
            Bank və Access Bank kimi iri qurumlarda çalışan mütəxəssislərimiz
            tərəfindən seçilmiş kitablar, real biznes və analitika keyzləri
            əsasında yaradılmışdır. Proqram bazardakı trendlər və biznesin
            tələbləri nəzərə alınaraq müntəzəm yenilənir. Bu proqram Statistika,
            Data Analitikası və Data Science metodologiyalarını R, Python,
            Spark, Spark SQL, Spark MLlib, AWS, Hadoop, Mongo DB, MapReduce,
            Hive, Hadoop, Tensorflow, Tableau, SPSS, SPSS Modeler öyrədilməsi
            daxil olmaqla 140 saatlıq tədris məzmununu əhatə edəcəkdir.
          </p>
          <div className="flex justify-center">
            <Link
              to="/program"
              className="bg-gradient-to-r p-6 from-teal-500 to-blue-500 text-white text-lg font-semibold rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              TƏLİM PROQRAMINI YÜKLƏYİN
            </Link>
          </div>
        </div>

        {/* Process Timeline Section */}
        <div className="bg-gradient-to-r from-gray-800 to-teal-700 py-16 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Proses necə işləyir?
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-stretch space-y-12 md:space-y-0 md:space-x-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex-1 rounded-lg p-3 shadow-lg flex flex-col justify-between"
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 text-2xl font-bold border-2  rounded-full mx-auto mb-6"
                  >
                    {step.id}
                  </div>
                  <h3
                    className="text-xl font-semibold text-center mb-4"
                    style={{ color: "#22bbad" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-center leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  {/* {index < steps.length - 1 && (
                  <div className="hidden md:block w-full h-1 bg-teal-400 mt-6"></div>
                )} */}
                  {/* ABC */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;
