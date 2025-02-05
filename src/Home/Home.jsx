import TrainingProgram from "../components/Training_Program/page";
import Customers from "../components/Customers/Customers";
import Team from "../components/Team/Team";
import MainSection from "../components/MainSection.jsx/MainSection";

const Home = () => {
  return (
    <div>
      <MainSection />
      <Customers />
      <TrainingProgram />
      <Team />
    </div>
  );
};

export default Home;
