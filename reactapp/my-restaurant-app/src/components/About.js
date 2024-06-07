import React from 'react';
import aboutImage from '../assets/img/newcopy_page-0002.jpg';
import logo from '../assets/img/logo.png';

const About = () => (
  <div className="about-style-three-area default-padding">
    <div className="container">
      <div className="row align-center">
        <div className="col-lg-5">
          <div className="about-style-three-thumb">
            <img className="animate" data-animate="fadeInRight" src={aboutImage} alt="Image Not Found" />
          </div>
        </div>
        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
          <div className="about-style-three-info">
            <h4 className="sub-heading">Welcome at</h4>
            <h2 className="title">Délice de l'inde</h2>
            <div className="item-grid-two-colum">
              <div className="item">
                <p>Delice de l'inde - Rennes.</p>
                <div className="site-owner">
                  <div className="thumb">
                    <img src={logo} alt="Image Not Found" />
                  </div>
                  <div className="info">
                    <h4>Your's</h4>
                    <span>Delice de l'inde Restaurant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

