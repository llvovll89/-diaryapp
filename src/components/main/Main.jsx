import React, { useState } from 'react';
import './Main.css';
import ReactMarkDown from 'react-markdown';
import { RanderPage } from '../randerpage/RanderPage';

export const Main = ({ active, updateNote , submitClick}) => {
  const [initFont, setInitFont] = useState(true);
  const onChangeEvent = (key, val) => {
    updateNote({
      ...active,
      [key]: val,
      modefied: Date.now(),
    });
  };
  const handelClick = () => {
    setInitFont(!initFont);
  };

  if (!active)
    return (
        <RanderPage />
    );

  return (
    <>
      <div className="main-container">
        <div className="note_edit">
          <input
            value={active.title}
            onChange={(e) => onChangeEvent('title', e.target.value)}
            type="text"
            autoFocus
            placeholder="Title 입력"
            style={{
              fontFamily: initFont
                ? "'Rajdhani', sans-serif"
                : 'Chosunilbo_myungjo',
            }}
          />
          <input type="file" accept="image/png , image/jpg, image/jpeg" />
          <textarea
            value={active.text}
            onChange={(e) => onChangeEvent('text', e.target.value)}
            style={{
              fontFamily: initFont
                ? "'Rajdhani', sans-serif"
                : 'Chosunilbo_myungjo',
            }}
          />
          <button className="font_change" onClick={handelClick}>
            {initFont ? '한글폰트' : '영문폰트'}
          </button>
          <button className='submit_btn' onClick={submitClick}>Submit</button>
        </div>
        <div className="note_preview">
          <h1
            className="title"
            style={{
              fontFamily: initFont
                ? "'Rajdhani', sans-serif"
                : 'Chosunilbo_myungjo',
            }}
          >
            {active.title}
          </h1>
          <ReactMarkDown
            className="mark_downs"
            style={{
              fontFamily: initFont
                ? "'Rajdhani', sans-serif"
                : 'Chosunilbo_myungjo',
            }}
          >
            {active.text}
          </ReactMarkDown>
        </div>
      </div>
    </>
  );
};
