import React, { FC, useContext, useEffect } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { gameInfoSelector, gameLoadSelector } from './slice/game.selectors';
import { useCurrentGameInfo } from './hooks/useCurrentGameInfo';
import { Board } from './components/board/board.component';
import { TicTacToeContext } from '../context/tic-tac-toe.context';
import { format } from 'date-fns';
import { useResetGame } from './hooks/useResetGame';
import { useNextGame } from './hooks/useNextGame';
import { useSquareClick } from './hooks/useSquareClick';

export const Game: FC = () => {
  const context = useContext(TicTacToeContext);

  useCurrentGameInfo();

  const resetGameClick = useResetGame();
  const nextGameClick = useNextGame();
  const onSquareClick = useSquareClick();

  const gameInfo = useAppSelector(gameInfoSelector);
  const loadingStatus = useAppSelector(gameLoadSelector);

  return (
    <>
      <div>Игрок играет за: {gameInfo?.result?.player}</div>
      <div>Компьютер играет за: {gameInfo?.result?.ai}</div>
      <button onClick={resetGameClick}>RESET CURRENT</button>
      <button onClick={nextGameClick}>NEXT GAME</button>
      {gameInfo && (
        <Board
          boardData={gameInfo.result.board.flat(1)}
          isDisabled={gameInfo.result.end}
          onSquareClick={onSquareClick}
        />
      )}
      <div>
        {context?.items.map((item) => {
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
    </>
  );
};
