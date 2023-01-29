import React, { FC, useContext } from 'react';
import { format } from 'date-fns';
import { TicTacToeContext } from '../../../../context/tic-tac-toe.context';

export const GameLog: FC = () => {
  const context = useContext(TicTacToeContext);

  return (
    <div>
      {context.items.map((item) => {
        return (
          <div key={item.position}>
            <div>
              {item.actor}; {format(item.time, 'HH:mm:ss')}; {item.mark}-
              {item.position}
            </div>
          </div>
        );
      })}
    </div>
  );
};
