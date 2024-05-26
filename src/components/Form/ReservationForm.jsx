import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { toZonedTime } from 'date-fns-tz';
import { parseISO, getDay, getHours } from 'date-fns';
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import './Form.css';

const ReservationForm = () => {
  const [date, setDate] = useState(new Date());
  const restaurantTimezone = "Europe/Paris";

  const validateReservation = (dateTime) => {
    const localDate = toZonedTime(parseISO(dateTime), restaurantTimezone);
    const dayOfWeek = getDay(localDate);
    const hours = getHours(localDate);

    if (dayOfWeek === 0) {
      return { valid: false, message: "The restaurant is closed on Sundays." };
    }

    if ((hours < 12 || hours >= 14) && (hours < 19 || hours >= 23)) {
      return {
        valid: false,
        message: "The restaurant operates between 12:00 - 14:00 and 19:00 - 23:00.",
      };
    }

    return { valid: true, message: "The reservation time is valid." };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const persons = e.target[3].value;
    const dateTime = e.target[4].value;

    const validation = validateReservation(dateTime);

    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, persons, dateTime })
    })
    .then(response => response.text())
    .then(message => {
      alert(message);
    });
  };

  return (
    <section className="reservation-section">
      <div className="reservation-container">
        <div className="reservation-image">
          <img src="path-to-your-image.jpg" alt="Delicious food" />
        </div>
        <div className="reservation-form-container">
          <h2>Book your table</h2>
          <form className="reservation-form" onSubmit={onSubmitHandler}>
            <div className="input-icon">
              <FaPhone />
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="input-icon">
              <FaUser />
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-icon">
              <FaCalendarAlt />
              <input type="datetime-local" placeholder="Date" required />
            </div>
            <div className="input-icon">
              <FaUsers />
              <input type="number" placeholder="Number of Persons" required />
            </div>
            <div className="input-icon">
              <FaEnvelope />
              <input type="email" placeholder="Email" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
