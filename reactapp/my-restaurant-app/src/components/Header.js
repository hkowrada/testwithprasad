import React from 'react';
import logo from '../assets/img/logo.png';

const Header = () => (
  <header>
    <nav className="navbar mobile-sidenav dark-layout brand-center navbar-default validnavs">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo logo-display" alt="Logo" />
            <img src={logo} className="logo logo-scrolled" alt="Logo" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <img src={logo} alt="Logo" />
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="overlay-screen"></div>
      </div>
    </nav>
  </header>
);

export default Header;
