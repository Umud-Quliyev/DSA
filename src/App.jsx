import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Home/Home";
import "./App.css";
import Details from "./components/Details/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/telim/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
