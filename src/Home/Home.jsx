import React from "react";
import TrainingProgram from "../components/Training_Program/page";
import Customers from "../components/Customers/Customers";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <div>
      <Customers />
      <TrainingProgram />
      <Team />
    </div>
  );
};

export default Home;
