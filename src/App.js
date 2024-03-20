import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import "./css/style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScroolToTop from "./Reusable/ScroolToTop";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        {/* <ScroolToTop /> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
