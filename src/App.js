// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Header from './Components/Header';
import Fetch from './Components/Fetch';
import { Provider } from 'react-redux';
import store from './utils/store';


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;



