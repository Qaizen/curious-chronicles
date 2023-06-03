// import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import About from "../about/about";
//import Contact from "./contact";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function Home({ setPage }) {
  return (
    <Router>
      <Header setPage={setPage} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Home;