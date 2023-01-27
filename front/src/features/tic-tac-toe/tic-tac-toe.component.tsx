import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/route';

export const TicTacToe = () => {
  return <RouterProvider router={router} />;
};
