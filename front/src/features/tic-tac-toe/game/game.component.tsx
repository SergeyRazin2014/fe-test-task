import React, { FC, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { gameActions } from './slice/game.slice';
import { gameInfoSelector, gameLoadSelector } from './slice/game.selectors';
import { gameUrls } from './api/game.url';
import { GameInfo } from './types/game.types';
import { getCurrentGameInfo, move, nextGame, resetGame } from './api/game.api';
import { useCurrentGameInfo } from './hooks/useCurrentGameInfo';
import { Board } from './components/board/board.component';
import { TicTacToeContext } from '../context/tic-tac-toe.context';
import { format } from 'date-fns';
import { getAiPosition } from './utils/getAiPosition';
import { O, X } from '../../../shared/constants/marks';

export const Game: FC = () => {
  const dispatch = useAppDispatch();
  const context = useContext(TicTacToeContext);

  const gameInfo = useAppSelector(gameInfoSelector);
  const loadingStatus = useAppSelector(gameLoadSelector);

  useCurrentGameInfo();

  const resetGameClick = () => {
    //*--* todo: вынести это в хук
    dispatch(gameActions.fetchPending());

    resetGame()
      .then((response) => {
        dispatch(gameActions.fetchSuccess(response.data));
        context.resetLog();
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
        context.resetLog();

        const aiIndex = response.data.result.board
          .flat(1)
          .findIndex((item) => item === O || item === X);

        if (aiIndex > 0) {
          context.addLogItem({
            position: aiIndex + 1,
            actor: 'ai',
            time: Date.now(),
            mark: response.data.result.ai,
          });
        }
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  };

  //-------------------------
  const onSquareClick = (val: number) => {
    //todo:  ЗАПИСАТЬ В ЛОГ ХОД ИГРОКА
    context.addLogItem({
      position: val,
      actor: 'player',
      time: Date.now(),
      mark: gameInfo!.result.player,
    });

    dispatch(gameActions.fetchPending());

    //*--* todo: вынести в хук
    move({ index: val })
      .then((response) => {
        //*--* ДОБАВИТЬ В ЛОГ ХОД КОМПА
        const reduxData = gameInfo;

        context.addLogItem({
          position: getAiPosition(reduxData!, response.data),
          mark: response.data.result.ai,
          time: Date.now(),
          actor: 'ai',
        });

        dispatch(gameActions.fetchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  };
  //-------------------------

  //*--* todo: ПОДУМАТЬ ЧТО СДЕЛАТЬ С   gameInfo!.
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
