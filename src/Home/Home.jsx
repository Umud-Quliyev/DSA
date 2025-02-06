import TrainingProgram from "../components/Training_Program/page";
import Customers from "../components/Customers/Customers";
import Team from "../components/Team/Team";
import MainSection from "../components/MainSection.jsx/MainSection";
import FAQ from "../components/FAQ/page";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <MainSection />
      <Customers />
      <TrainingProgram />
      <Team />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
