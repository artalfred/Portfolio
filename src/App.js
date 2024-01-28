import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Works from "./Reusable/Work";
import "./css/style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Others from "./components/Others";
import ScroolToTop from "./Reusable/ScroolToTop";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <ScroolToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:id" element={<Works />} />
          <Route path="/projects" element={<Others />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
