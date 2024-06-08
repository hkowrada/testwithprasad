import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import MenuSlider from "./components/MenuSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/bootstrap-datepicker3.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/flaticon-set.css";
import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/helper.css";
import "../src/assets/css/shop.css";
import "../src/assets/css/style.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/unit-test.css";
import "../src/assets/css/validnavs.css";
import "../src/assets/css/magnific-popup.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <Banner />
            <Features />
            <MenuSlider />
            <About />
            <Footer />
          </div>
        }
      />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);

export default App;
