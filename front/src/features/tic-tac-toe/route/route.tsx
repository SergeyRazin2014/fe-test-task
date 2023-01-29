import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { Game } from '../components/game/game.component';
import { Score } from '../components/score/score.component';
import React from 'react';
import { Header } from '../components/header/header.component';

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Game />,
      },
      {
        path: '/score',
        element: <Score />,
      },
    ],
  },
]);
