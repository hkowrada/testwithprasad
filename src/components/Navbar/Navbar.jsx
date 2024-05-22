import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>{" "}
        </li>
        <li className="p__opensans">
          <Link to="/about">About</Link>{" "}
        </li>
        <li className="p__opensans">
          <Link to="/menu">Menu</Link>{" "}
        </li>
        {/* <li className='p__opensans'><a href="#Awards">Awards</a> </li> */}
        <li className="p__opensans">
          <a href="#contact">Find Us</a>{" "}
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Contact Us ‎{" "}
        </a>

        {/* <div /> */}

        {/* <a href="/"className='p__opensans'>‎Login In / Registration   ‎‎</a> */}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              {/* <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li> */}
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Find Us
                </a>
              </li>
              <li>
                <a href="#login" onClick={() => setToggleMenu(false)}>
                  Reservation
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
