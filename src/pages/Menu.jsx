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
//import { Navbar } from "../components";
import "../App.css";
import DummyMenu from "../container/Menu/DummyMenu";

const Menu = () => (
  <div>

    {/* <SpecialMenu /> */}
    <DummyMenu />

    <Footer />
  </div>
);

export default Menu;
