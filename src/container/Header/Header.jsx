import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h3 className="app__header-h1">Originale Cuisine Indienne</h3>
      {/* <p className="p__opensans" style={{ margin: '2rem 0' }}>Fine dining is an art that combines exceptional food, impeccable service, an inviting atmosphere, and attention to detail to create an unforgettable culinary journey for every guest. </p> */}
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
