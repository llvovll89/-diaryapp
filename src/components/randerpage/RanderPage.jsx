import React from 'react';
import { useTypewriter, Cursor , Typewriter  } from 'react-simple-typewriter';
export const RanderPage = () => {
  let words = ['오늘하루는 어땟나요??', '다이어리에 남겨보세요'];

  const [text] = useTypewriter({
    words,
    loop: 0,
  });

  return (
    <>
      <div className="randerpage">
        <div className="content">
          <span className="ani_text">
            <Cursor cursorColor="#FFFFFF" cursorStyle="<" />
            <span> {text} </span>
            <Cursor cursorColor="#FFFFFF" cursorStyle="/>" />
          </span>
          <span className='ani_text'>
          <Typewriter 
            words={['오늘은 무엇을','무엇을 먹어야','할까요... ?']}
            loop={30}
            cursor
            cursorStyle="< />"
            cursorColor='#FFF'
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
          </span>
        </div>
      </div>
    </>
  );
};
