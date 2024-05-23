import "./Form.css";
import React from "react";
import { getDay, getHours, parseISO } from "date-fns";
// import { zonedTimeToUtc, utcToZonedTime } from "date-fns-tz";
import { toZonedTime } from "date-fns-tz";

const ResevationForm = () => {
  const restaurantTimezone = "Europe/Paris";
  const validateReservation = (dateTime) => {
    const localDate = toZonedTime(parseISO(dateTime), restaurantTimezone);
    const dayOfWeek = getDay(localDate);
    const hours = getHours(localDate);

    console.log("hours:" + hours);
    console.log("dayy" + dayOfWeek);

    // sunday check
    if (dayOfWeek === 0) {
      return { valid: false, message: "The restaurant is closed on Sundays." };
    }

    // time check
    if (hours < 9 || hours >= 18) {
      return {
        valid: false,
        message: "The restaurant operates between 9 AM and 6 PM.",
      };
    }

    return { valid: true, message: "The reservation time is valid." };
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    const name = e.target[0].value;
    const email = e.target[1].value;
    const persons = e.target[2].value;
    const dateTime = e.target[3].value;
    // console.log(dateTime);
    // const { name, email, persons, dateTime } = e.input;
    // if(dateTime.split('T')[1])
    const validation = validateReservation(dateTime);

    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    alert("Reservation successful!");
  };
  return (
    <section className="section-contact-me">
      <div className="contact-box">
        <div className="title-details-contact">
          <h2>Want to reserve a seat?</h2>
          <p>Fill the form to get the token</p>
        </div>
        <form className="contact-me-form" onSubmit={onSubmitHandler}>
          <input type="text" placeholder="name" required />
          <input type="email" placeholder="Email" required />
          <input type="number" placeholder="no.of persons" required />
          <input type="datetime-local" placeholder="time and date" required />
          {/* <textarea placeholder="Enter your point here.."></textarea> */}
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ResevationForm;
