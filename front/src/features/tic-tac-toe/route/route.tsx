import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { Game } from '../game/game.component';
import { Score } from '../score/score.component';
import React from 'react';
import { Header } from '../../../shared/components/header/header.component';

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
