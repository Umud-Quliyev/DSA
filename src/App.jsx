import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Home/Home";
import "./App.css";
import Details from "./components/Details/Details";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RequestPage from "./RequestPage/RequestPage";
import ProgramPage from "./ProgramPage/ProgramPage";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/muraciet" element={<RequestPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/telim/:id" element={<Details />} />
        </Route>
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
