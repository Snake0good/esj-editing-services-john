import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Prices from './pages/Prices'
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import UploadDocuments from './pages/UploadDocuments';
import Documents from './pages/Documents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route index path="/" element={ <App />}></Route>
      <Route path="/prices" element={ <Prices /> }></Route>
      <Route path="/services" element={ <Services />}></Route>
      <Route path="/contact" element={ <Contact />}></Route>
      <Route path="/faq" element={ <FAQ />}></Route>
      <Route path="/about" element={ <About />}></Route>
      <Route path="/upload" element={ <UploadDocuments />}></Route>
      <Route path="documents" element={ <Documents />}></Route>
    </Routes>
  </Router>
);