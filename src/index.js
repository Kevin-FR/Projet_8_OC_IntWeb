import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Gallery from './pages/Gallery';
import ShowItem from './pages/ShowItem';
import Error404 from './pages/Error404';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/show/:id" element={<ShowItem />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
