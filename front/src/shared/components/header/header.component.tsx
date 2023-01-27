import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './header.module.css';

export const Header: FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_items}>
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
