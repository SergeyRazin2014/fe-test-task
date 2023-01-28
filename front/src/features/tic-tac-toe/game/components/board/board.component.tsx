import React, { FC, SyntheticEvent, useContext } from 'react';
import { Square } from '../square/square.component';
import styles from './board.module.css';
import { move } from '../../api/game.api';
import { X, O } from '../../../../../shared/constants/marks';
import { gameActions } from '../../slice/game.slice';
import { useAppDispatch } from '../../../../../app/hooks';
import { TicTacToeContext } from '../../../context/tic-tac-toe.context';

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
    <div className={styles.board}>
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
