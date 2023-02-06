import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ note, addNote, delNote, active, setActive }) => {
  const sortNote = note.sort((a, b) => b.modefied - a.modefied);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <h1 className="title">Diary 🍚</h1>
          <button className="add_btn" onClick={addNote}>
            추가하기
          </button>
        </div>
        <div className="sidebar-body">
          {sortNote.map((item) => (
            <div
              className={`sidebar-list ${item.id === active ? 'active' : ''}`}
              key={item.id}
            >
              <div className="sidebar-item-title">
                <span className="item_title">제목 : {item.title}</span>
                <div className="btnbox">
                <button
                  className="up_btn"
                  onClick={() => setActive(item.id)}
                >
                  수정하기
                </button>
                  <button className="del_btn" onClick={() => delNote(item.id)}>
                    삭제하기
                  </button>
                </div>
              </div>

              <p>{item.text && item.text.substr(0, 80) + '...'}</p>
              <div className="fixed-data">마지막 수정 {item.modefied}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
