import React, { useState } from 'react';
import ReactMarkDown from 'react-markdown';
import { Nocontent } from '../nocontentpage/Nocontent';
import './Main.css';

export const Main = ({ active, updateNote, submitClick, note , onClick}) => {
  const [initFont, setInitFont] = useState(true);

  const onChangeEvent = (key, val) => {
    const today = new Date();
    const year = today.getFullYear();
    const hour = String(today.getHours()).padStart(2, 0);
    const min = String(today.getMinutes()).padStart(2, 0);
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    updateNote({
      ...active,
      [key]: val,
      modefied: `${year}-${month}-${day} | ${hour} : ${min}`,
    });
  };

  const handelClick = () => {
    setInitFont(!initFont);
  };

  const clickHandler = () => {

  }

  if (!active)
    return <Nocontent note={note} active={active} initFont={initFont} onClick={onClick} />;

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
          <div className="btn_box">
            <button
              className="font_change"
              onClick={handelClick}
              style={{
                background: initFont
                  ? 'rgb(230, 193, 144)'
                  : 'rgb(108, 171, 195)',
                color: initFont ? '#fff' : '#fff',
              }}
            >
              {initFont ? '"Rajdhani Font"' : '"Chosunilbo_myungjo" Font'}
            </button>
            <button className="submit_btn" onClick={submitClick}>
              Submit
            </button>
          </div>
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
