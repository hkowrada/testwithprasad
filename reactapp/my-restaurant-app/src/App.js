import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import MenuSlider from './components/MenuSlider';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Banner />
    <Features />
    <MenuSlider />
    <About />
    <Footer />
  </div>
);

export default App;
