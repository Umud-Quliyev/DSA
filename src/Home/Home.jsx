import Customers from "../components/Customers/Customers";
import Team from "../components/Team/Team";
import MainSection from "../components/MainSection.jsx/MainSection";
import FAQ from "../components/FAQ/page";
import Contact from "../components/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import TrainingProgram from "../components/Training_Program/TrainingProgram";

const Home = () => {
  return (
    <div className="">
      <MainSection />
      <Customers />
      <TrainingProgram />
      <Team />
      <FAQ />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Home;
