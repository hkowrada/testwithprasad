import React from 'react';

const Features = () => (
  <div className="feature-style-three-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 pr-80 pr-md-15 pr-xs-15">
          <div className="reservation-form light">
            <i className="fas fa-utensils"></i>
            <h3>Book a table</h3>
            <form id="bookingForm" action="assets/mail/contact.php" method="POST">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <select id="persons" name="persons" required>
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
              <div className="row" id="extra-persons-row" style={{ display: 'none' }}>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input className="form-control" id="extra-persons" name="extra_persons" placeholder="Enter number of persons" type="number" min="9" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-group date date-picker-one">
                    <input type="text" className="form-control" id="date" name="date" placeholder="Date" required />
                    <span className="input-group-addon"><i className="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <select id="time" name="time" required>
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
                  <button type="submit" name="submit" id="submit">Book A Table</button>
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
              <h2 className="flex-title mb-35"><img src="assets/img/shape/fire.png" alt="Image Not Found" /> Our Popular category</h2>
              <div className="food-cat-carousel swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/Butter-Chicken.jpg" alt="Image Not Found" />
                      <div className="overlay">
                        <span>Main Dishes</span>
                        <h5>Butter Chicken</h5>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/pista.jpg" alt="Image Not Found" />
                      <div className="overlay">
                        <span>Desserts</span>
                        <h5>Pista Kulfi</h5>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/poisson.avif" alt="Image Not Found" />
                      <div className="overlay">
                        <span>Sea Food</span>
                        <h5>Poisson Goan Curry</h5>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="javascript:void(0);" onClick={() => openModal('assets/img/newcopy_page-0007.jpg')}>
                      <img src="assets/img/malai.jpg" alt="Image Not Found" />
                      <div className="overlay">
                        <span>Entrées</span>
                        <h5>Malai Tikka</h5>
                      </div>
                    </a>
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

export default Features;
