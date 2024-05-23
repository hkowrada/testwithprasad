import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Reservation = lazy(() => import('./pages/Reservation'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
