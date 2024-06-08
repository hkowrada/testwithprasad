import React from "react";
import logo from "../assets/img/logo.png";
import footerImg from "../assets/img/shape/9.png";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-style-one bg-dark text-light">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-item mt-50">
            <div className="f-item about">
              <h4 className="widget-title">About Us</h4>
              <p>From Delice de l'inde - Originale Cuisine Indienne</p>
              <ul className="footer-social">
                <li>
                  <a href="https://www.instagram.com/ddlinde_fr/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-item mt-50">
            <div className="f-item contact">
              <h4 className="widget-title">Contact Info</h4>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">36 Rue Vasselot, 35000 Rennes</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="content">
                    <a href="tel:2151234567">02.99.79.89.89</a>
                    <br />
                    <a href="tel:2151234567">06.16.56.45.77</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content">
                    <a href="mailto:name@email.com">ddlinde.fr@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-item mt-50">
            <h4 className="widget-title">Newsletter</h4>
            <p>
              Join our subscribers list to get the latest news and special
              offers.
            </p>
            <div className="f-item newsletter">
              <form action="#">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control"
                  name="email"
                />
                <button type="submit">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
            <fieldset>
              <input type="checkbox" id="privacy" name="privacy" />
              <label htmlFor="privacy">I agree to the Privacy Policy</label>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom text-light">
      <div className="footer-bottom-shape">
        <img src={footerImg} alt="Image Not Found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <p>© Copyright 2024 ddlinde. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
