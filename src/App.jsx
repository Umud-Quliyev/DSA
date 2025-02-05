import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  path="/" element={<Home />} />
        <Route path="/practice" element={<Practics/>}/>
      </Route>
    </Routes>
  );
}

export default App;
