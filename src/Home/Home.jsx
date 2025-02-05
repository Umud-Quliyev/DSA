import TrainingProgram from "../components/Training_Program/page";
import Customers from "../components/Customers/Customers";
import Team from "../components/Team/Team";
import MainSection from "../components/MainSection.jsx/MainSection";
import FAQ from "../components/FAQ/page";

const Home = () => {
  return (
    <div>
      <MainSection />
      <Customers />
      <TrainingProgram />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
