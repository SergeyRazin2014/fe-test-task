import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { gameActions } from './slice/game.slice';
import { gameInfoSelector, gameLoadSelector } from './slice/game.selectors';
import { gameUrls } from './api/game.url';
import { GameInfo } from './types/game.types';
import { getCurrentGameInfo, nextGame, resetGame } from './api/game.api';
import { useCurrentGameInfo } from './hooks/useCurrentGameInfo';
import { Board } from './components/board/board.component';
import { LOADING_STATUS } from '../../../shared/constants/loading-status';

export const Game: FC = () => {
  const dispatch = useAppDispatch();

  const gameInfo = useAppSelector(gameInfoSelector);
  const loadingStatus = useAppSelector(gameLoadSelector);

  useCurrentGameInfo();

  //*--* todo: ПОДУМАТЬ КАК СДЕЛАТЬ ЛУЧШЕ ЛОАДЕР
  if (loadingStatus !== LOADING_STATUS.LOADED) {
    return <p>Loading...</p>;
  }

  const resetGameClick = () => {
    //*--* todo: вынести это в хук
    dispatch(gameActions.fetchPending());

    resetGame()
      .then((response) => {
        dispatch(gameActions.fetchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  };

  //*--* todo: вынести это в хук
  const nextGameClick = () => {
    nextGame()
      .then((response) => {
        dispatch(gameActions.fetchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  };

  //*--* todo: ПОДУМАТЬ ЧТО СДЕЛАТЬ С   gameInfo!.
  return (
    <>
      <div>Игрок играет за: {gameInfo?.result?.player}</div>
      <div>Компьютер играет за: {gameInfo?.result?.ai}</div>
      <button onClick={resetGameClick}>RESET CURRENT</button>
      <button onClick={nextGameClick}>NEXT GAME</button>
      <Board
        boardData={gameInfo!.result.board.flat(1)}
        isDisabled={gameInfo!.result.end}
      />
    </>
  );
};
