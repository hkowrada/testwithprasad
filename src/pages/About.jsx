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
} from "../container";
import { Navbar } from "../components";
import "../App.css";

const About = () => (
  <div>
    <Navbar />
    {/* <Header /> */}
    <AboutUs />

    <Footer />
  </div>
);

export default About;