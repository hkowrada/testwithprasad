import React from 'react';
import { Navbar, Footer } from '../components';
import ReservationForm from '../components/Form/ReservationForm';
import '../App.css';  // Ensure that styles are applied

const Reservation = () => (
  <div>
    <Navbar />
    <ReservationForm />
    <Footer />
  </div>
);

export default Reservation;
