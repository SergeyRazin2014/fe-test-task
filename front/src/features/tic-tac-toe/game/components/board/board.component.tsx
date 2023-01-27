import React, { FC, SyntheticEvent } from 'react';
import { Square } from '../square/square.component';
import styles from './board.module.css';
import { move } from '../../api/game.api';
import { X, O } from '../../../../../shared/constants/marks';
import { gameActions } from '../../slice/game.slice';
import { useAppDispatch } from '../../../../../app/hooks';

type BoardProps = {
  boardData: Array<number | string>;
  isDisabled?: boolean;
};
export const Board: FC<BoardProps> = ({ boardData, isDisabled = false }) => {
  const dispatch = useAppDispatch();

  const onSquareClick = (val: number) => {
    dispatch(gameActions.fetchPending());

    //*--* todo: вынести в хук
    move({ index: val })
      .then((response) => {
        dispatch(gameActions.fetchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  };

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
