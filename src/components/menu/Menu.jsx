import React from 'react';
import { Link } from 'react-router-dom';
import { menuList } from '../../assets/data';

export const Menu = () => {
  return (
    <>
      <div className="menu">
        {menuList.map((item) => (
          <Link key={item.id} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
    </>
  );
};
