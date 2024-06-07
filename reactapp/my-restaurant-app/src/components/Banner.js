import React from 'react';
import bannerImage from '../assets/img/biriyani.jpg';

const Banner = () => (
  <div className="banner-style-three-area text-light text-center video-bg-live bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="player" data-property="{videoURL:'vTA7li3tVV4',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:103, opacity:1, quality:'default'}"></div>
    <div className="banner-style-three-content shadow dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2>Délice de l'inde</h2>
            <ul className="list-quality">
              <li>Originale</li>
              <li>Cuisine</li>
              <li>Indienne</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
