import React from 'react';
import uuid from 'react-uuid';
import './Nocontent.css';

export const Nocontent = ({ note }) => {
  return (
    <>
      <div className="note_container">
        <div className="note_box"> 
        {note.map((item) => (
            <div className="note_contents" key={uuid()}>
              <div className="note_title">
                <span>{item.title}</span>
                <div className="note_modefied">
                <p>Date : {item.modefied}</p>
              </div>
              </div>
              <div className="note_item">
                <p>{item.text && item.text.substr(0, 300) + '...'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
