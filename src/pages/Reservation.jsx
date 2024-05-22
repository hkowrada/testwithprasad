import React from "react";
// import { ReservationForm } from "../components/Form/ResevationForm";

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
// import Calendar from "react-calendar";
import { CalendarCustom } from "../components";
import ReservationForm from "../components/Form/ResevationForm";

const Reservation = () => (
  <div>
    <Navbar />
    {/* <Header /> */}
    {/* <CalendarCustom /> */}
    <ReservationForm />

    <Footer />
  </div>
);

export default Reservation;
