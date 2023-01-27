import React, { FC } from 'react';
import { Square } from '../square/square.component';

type BoardProps = {
  boardData: number[][];
};
export const Board: FC<BoardProps> = (props) => {
  return <Square value={1} title='X' />;
};
