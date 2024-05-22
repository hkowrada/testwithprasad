import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./pages/Reservation";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/menu" Component={Menu} />
      <Route path="/about" Component={About} />
      <Route path="/reservation" Component={Reservation} />
    </Routes>
  </BrowserRouter>
);

export default App;
