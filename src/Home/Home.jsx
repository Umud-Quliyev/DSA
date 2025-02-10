import Customers from "../components/Customers/Customers";
import Team from "../components/Team/Team";
import MainSection from "../components/MainSection.jsx/MainSection";
import FAQ from "../components/FAQ/Faq";
import Contact from "../components/Contact/Contact";
import Training from "../components/Training/Training";

const Home = () => {
  return (
    <div>
      <MainSection />
      <Customers />
      <Training />
      <Team />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
