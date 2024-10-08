import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import "./css/style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScroolToTop from "./Reusable/ScroolToTop";
import Experience from "./components/Experience";
import Archive from "../src/components/Archive";

function App() {
  return (
    <BrowserRouter>
      <ScroolToTop />
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
