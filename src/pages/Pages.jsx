import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Recode } from './Recode';
import { Code } from './Code';

export const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<Recode />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </Router>
    </>
  );
};
