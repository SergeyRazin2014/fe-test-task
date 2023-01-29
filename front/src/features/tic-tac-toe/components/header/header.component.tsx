import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Divider } from 'antd';
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
            <Link to={`/`} className='nav-item'>
              GAME
            </Link>
          </li>
          <li>
            <Link to={`/score`} className='nav-item'>
              SCORE
            </Link>
          </li>
        </ul>
      </nav>
      <Divider className='driver' />
      <Outlet />
    </>
  );
};
