import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Main } from '../components/main/Main';
import { Sidebar } from '../components/sidebar/Sidebar';

export const Home = () => {
  const [note, setNote] = useState(
    localStorage.note ? JSON.parse(localStorage.note) : []
  );
  const [active, setActive] = useState(false);

  const addNote = () => {
    const today = new Date();
    const year = today.getFullYear();
    const hour = today.getHours();
    const min = today.getMinutes();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const newNote = {
      id: uuid(),
      title: '빈 노트',
      text: 'MarkDown이 적용 됩니다',
      modefied: `${year}-${month}-${day} | ${hour} : ${min}`,
    };

    // setActive(!active);
    setNote([newNote, ...note]);
  };

  const delNote = (delId) => {
    const del = window.confirm('정말 삭제 하시겠습니까?');
    if (del) {
      alert('삭제되었습니다.');
      setNote(note.filter((item) => item.id !== delId));
    } else {
      setNote(note);
    }
  };

  const getActive = () => {
    return note.find((item) => item.id === active);
  };

  const updateNote = (upNote) => {
    const upNoteArr = note.map((item) => {
      if (item.id === active) {
        return upNote;
      }

      return item;
    });

    setNote(upNoteArr);
  };

  const submitClick = () => {
    let arr = [];
    setActive(!active);
    return arr.push(...note);
  };

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note));
  }, [note]);

  return (
    <>
      <Main
        active={getActive()}
        updateNote={updateNote}
        submitClick={submitClick}
        note={note}
        onClick={getActive()}
      />
      <Sidebar
        note={note}
        addNote={addNote}
        delNote={delNote}
        active={active}
        setActive={setActive}
      />
    </>
  );
};
