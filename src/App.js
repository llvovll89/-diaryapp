import React from 'react';
import { Pages } from './pages/Pages';

function App() {
  // let vh = window.innerHeight * 0.01;
  // document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <>
      <div className="wrap">
        <Pages />
      </div>
    </>
  );
}

export default App;
