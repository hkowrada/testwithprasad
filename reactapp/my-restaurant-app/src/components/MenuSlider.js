import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButterChicken from "../assets/img/Butter-Chicken.jpg";
import Pista from "../assets/img/pista.jpg";
import Poisson from "../assets/img/poisson.avif";
import Malai from "../assets/img/malai.jpg";
import Illustration from "../assets/img/illustration/ddl.png";
import Menu1 from "../assets/img/newcopy_page-0003.jpg";
import Menu2 from "../assets/img/newcopy_page-0004.jpg";
import Menu3 from "../assets/img/newcopy_page-0005.jpg";
import "./menuSlider.css";

const MenuSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="menu-type-area overflow-hidden default-padding bg-dark bg-cover"
      style={{ backgroundImage: "url(assets/img/shape/2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <div className="menu-type-item">
                <div className="thumb">
                  <img src={Illustration} alt="Image Not Found" />
                </div>
                <div className="info">
                  <img src={Menu1} alt="Menu Item 1" />
                </div>
              </div>
              <div className="menu-type-item">
                <div className="thumb">
                  <img src={Illustration} alt="Image Not Found" />
                </div>
                <div className="info">
                  <img src={Menu2} alt="Menu Item 1" />
                </div>
              </div>
              <div className="menu-type-item">
                <div className="thumb">
                  <img src={Illustration} alt="Image Not Found" />
                </div>
                <div className="info">
                  <img src={Menu3} alt="Menu Item 1" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
