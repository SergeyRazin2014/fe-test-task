import React, { FC } from 'react';
import './square.css';
import cn from 'classnames';
import { X, O } from '../../../../constants/marks';

type SquareProps = {
  isDisabled: boolean;
  value: number;
  title: string;
  onClick: () => void;
};

/**
 * Компонент - ячейка игровой доски
 * */
export const Square: FC<SquareProps> = (props) => {
  const classSquare = cn('square', {
    ['disabled']: props.title === X || props.title === O,
  });

  return (
    <button
      disabled={props.isDisabled}
      onClick={() => props.onClick()}
      className={classSquare}
    >
      {props.title}
    </button>
  );
};
