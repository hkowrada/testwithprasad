import React from 'react';
import ButterChicken from '../assets/img/Butter-Chicken.jpg';
import Pista from '../assets/img/pista.jpg';
import Poisson from '../assets/img/poisson.avif';
import Malai from '../assets/img/malai.jpg';
import Illustration from '../assets/img/illustration/ddl.png';
import Menu1 from '../assets/img/newcopy_page-0003.jpg';
import Menu2 from '../assets/img/newcopy_page-0004.jpg';
import Menu3 from '../assets/img/newcopy_page-0005.jpg';

const MenuSlider = () => (
  <div className="menu-type-area overflow-hidden default-padding bg-dark bg-cover" style={{ backgroundImage: 'url(assets/img/shape/2.jpg)' }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="swiper-container menu-type-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="menu-type-item animate" data-animate="fadeInUp">
                  <div className="thumb">
                    <img src={Illustration} alt="Image Not Found" />
                  </div>
                  <div className="info">
                    <img src={Menu1} alt="Menu Item 1" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="menu-type-item animate" data-animate="fadeInUp">
                  <div className="thumb">
                    <img src={Illustration} alt="Image Not Found" />
                  </div>
                  <div className="info">
                    <img src={Menu2} alt="Menu Item 1" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="menu-type-item animate" data-animate="fadeInUp">
                  <div className="thumb">
                    <img src={Illustration} alt="Image Not Found" />
                  </div>
                  <div className="info">
                    <img src={Menu3} alt="Menu Item 1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuSlider;
