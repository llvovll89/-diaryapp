import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiWrite } from 'react-icons/tfi';
import './Sidebar.css';

export const Sidebar = ({ note, addNote, delNote, active, setActive }) => {
  const sortedNote = [...note].sort((a, b) => b.modefied - a.modefied);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (item) => {
    if (item.id === active) {
      setActive(!active);
    } else {
      setActive(item.id);
    }
  };

  return (
    <>
      <div className={`sidebar-container ${toggle ? ' active' : ''}`}>
        <div className="sidebar-header">
          <h1 className="title">
            <TfiWrite /> 뭐적지?
          </h1>
          <button className="add_btn" onClick={addNote}>
            추가하기
          </button>
        </div>
        <div className="sidebar-body">
          {sortedNote.map((item) => (
            <div
              className={`sidebar-list ${item.id === active ? 'active' : ''}`}
              key={item.id}
            >
              <div className="sidebar-item-title">
                <span className="item_title">제목 : {item.title}</span>
                <div className="btnbox">
                  <button
                    className="up_btn"
                    onClick={() => toggleHandler(item)}
                  >
                    {active === item.id ? '돌아가기' : '수정하기'}
                  </button>
                  <button className="del_btn" onClick={() => delNote(item.id)}>
                    삭제하기
                  </button>
                </div>
              </div>

              <p>
                {item.text.length > 150
                  ? item.text?.substr(0, 120) + '...'
                  : item.text}
              </p>
              <div className="fixed-data">마지막 수정 {item.modefied}</div>
            </div>
          ))}
        </div>

        <div className="toggle" onClick={toggleHandler}>
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
};
