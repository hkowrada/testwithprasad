import "./Form.css";
import React from "react";

const ResevationForm = () => {
  const onSubmitHandler = (e) => {
    console.log("submitted");
  };
  return (
    <section className="section-contact-me">
      <div className="contact-box">
        <div className="title-details-contact">
          <h2>Want to connect with me for a project/doubts?</h2>
          <p>Send me a mail by filling the form</p>
        </div>
        <form className="contact-me-form" onSubmit={onSubmitHandler}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Enter your point here.."></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ResevationForm;
