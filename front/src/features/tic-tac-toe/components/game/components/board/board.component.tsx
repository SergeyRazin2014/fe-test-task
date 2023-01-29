import React, { FC } from 'react';
import { Square } from '../square/square.component';
import { X, O } from '../../../../constants/marks';
import './board.css';

type BoardProps = {
  boardData: Array<number | string>;
  isDisabled?: boolean;
  onSquareClick: (val: number) => void;
};
/**
 * Компонент для отображения игровой доски
 */
export const Board: FC<BoardProps> = ({
  boardData,
  onSquareClick,
  isDisabled = false,
}) => {
  return (
    <div className='board'>
      {boardData.flat(1).map((val, index) => {
        return (
          <Square
            key={index}
            title={val === X || val === O ? val : ''}
            value={index + 1}
            isDisabled={val === X || val === O || isDisabled}
            onClick={() => onSquareClick(val as number)}
          />
        );
      })}
    </div>
  );
};
