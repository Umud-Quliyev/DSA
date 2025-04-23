import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Home/Home";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RequestPage from "./RequestPage/RequestPage";
import ProgramPage from "./ProgramPage/ProgramPage";
import Detail from "./Detail";
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {
  AOS.init({
    duration: 1000,
    once: true,      
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/muraciet" element={<RequestPage/>}/>
          <Route path="/program" element={<ProgramPage/>}/>
          <Route path="/telim/:id" element={<Detail />} />
        </Route>
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
