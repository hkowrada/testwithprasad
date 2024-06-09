import React, { useState } from "react";
import fireImg from "../assets/img/shape/fire.png";
import butterChickenImg from "../assets/img/Butter-Chicken.jpg";
import pistaImg from "../assets/img/pista.jpg";
import poissonImg from "../assets/img/poisson.avif";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { createPortal } from "react-dom";

const Features = () => {
  const [formValues, setFormValues] = useState({
    phone: "",
    email: "",
    persons: "1",
    date: "",
    time: "12:00",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    // Phone number validation
    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    // Email validation
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    // Date validation
    if (!formValues.date) {
      errors.date = "Date is required";
    } else {
      const selectedDate = new Date(formValues.date);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison
      if (selectedDate < currentDate) {
        errors.date = "Date must be today or in the future";
      }
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:5000/reserve", formValues)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setFormValues({
              phone: "",
              email: "",
              persons: "1",
              date: "",
              time: "12:00",
            });
          }
        })
        .catch((err) =>
          toast.error("Unable to reserve the table. Try after sometime", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
    }
  };

  return (
    <div className="feature-style-three-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pr-80 pr-md-15 pr-xs-15">
            <div className="reservation-form light">
              <i className="fas fa-utensils"></i>
              <h3>Book a table</h3>
              <form id="bookingForm" onSubmit={handleSubmit} method="POST">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        type="number"
                        value={formValues.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select
                        id="persons"
                        name="persons"
                        value={formValues.persons}
                        onChange={handleChange}
                        required
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="7">7 Persons</option>
                        <option value="8">8 Persons</option>
                        <option value="8+">8+ Persons</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-group date date-picker-one">
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formValues.date}
                        onChange={handleChange}
                        required
                      />
                      {errors.date && <p className="error">{errors.date}</p>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select
                        id="time"
                        name="time"
                        value={formValues.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" name="submit" id="submit">
                      Book A Table
                    </button>
                    {createPortal(
                      <>
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={true}
                          rtl={false}
                          theme="light"
                        />
                        <ToastContainer />
                      </>,
                      document.body
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="relative default-padding-top">
              <div className="food-swiper-nav">
                <div className="food-cat-prev"></div>
                <div className="food-cat-next"></div>
              </div>
              <div className="food-cat-items">
                <h2 className="flex-title mb-35">
                  <img src={fireImg} alt="Image Not Found" /> Our Popular
                  category
                </h2>
                <div className="food-cat-carousel swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="#">
                        <img src={butterChickenImg} alt="Image Not Found" />
                        <div className="overlay">
                          <span>Main Dishes</span>
                          <h5>Butter Chicken</h5>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <img src={pistaImg} alt="Image Not Found" />
                        <div className="overlay">
                          <span>Desserts</span>
                          <h5>Pista Kulfi</h5>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="#">
                        <img src={poissonImg} alt="Image Not Found" />
                        <div className="overlay">
                          <span>Sea Food</span>
                          <h5>Poisson Goan Curry</h5>
                        </div>
                      </a>
                    </div>
                    {/* <div className="swiper-slide">
                    <a href="javascript:void(0);" onClick={() => openModal('assets/img/newcopy_page-0007.jpg')}>
                      <img src="assets/img/malai.jpg" alt="Image Not Found" />
                      <div className="overlay">
                        <span>Entrées</span>
                        <h5>Malai Tikka</h5>
                      </div>
                    </a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
