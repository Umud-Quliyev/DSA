import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Home/Home";
import Practics from "./Practics/Practics";
import "./App.css";
import TrainingProgram from "./components/Training_Program/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practics />} />
      </Route>
    </Routes>
  );
}

export default App;
