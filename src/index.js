import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Header from './components/Header';
import Gallery from './components/pages/Gallery';
import Error404 from './components/pages/Error404';
import Footer from './components/Footer';
import Banner from './components/Banner';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Banner />
      <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
