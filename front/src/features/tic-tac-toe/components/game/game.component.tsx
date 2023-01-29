import React, { FC, useContext, useEffect } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { gameInfoSelector, gameLoadSelector } from './slice/game.selectors';
import { useCurrentGameInfo } from './hooks/useCurrentGameInfo';
import { Board } from './components/board/board.component';
import { useResetGame } from './hooks/useResetGame';
import { useNextGame } from './hooks/useNextGame';
import { useSquareClick } from './hooks/useSquareClick';
import { GameLog } from './components/game-log/game-log.component';

export const Game: FC = () => {
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
        <GameLog />
      </div>
    </>
  );
};
