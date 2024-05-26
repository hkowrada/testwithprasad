import React from 'react';
import FooterOverlay from '../components/Footer/Footer';
import ReservationForm from '../components/Form/ReservationForm';
import '../App.css';

const Reservation = () => (
  <div>
    <ReservationForm />
    <FooterOverlay />
  </div>
);

export default Reservation;
