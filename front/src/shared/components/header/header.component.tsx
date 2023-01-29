import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.css';

/**
 * Компонент - шапка игры крестики нолики
 * */
export const Header: FC = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-items'>
          <li>
            <Link to={`/`}>GAME</Link>
          </li>
          <li>
            <Link to={`/score`}>SCORE</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
