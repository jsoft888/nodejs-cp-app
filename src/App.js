// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const server = require('./server');

import Header from './components/header.js';
import HomePage from './components/home.js';
import ServicesPage from './components/services.js';
import ContactPage from './components/contact.js';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/our-services" component={ServicesPage} />
        <Route path="/contact-us" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
