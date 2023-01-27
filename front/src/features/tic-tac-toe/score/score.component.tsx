import React, { useEffect } from 'react';
import { gameActions } from '../game/slice/game.slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getScore } from './api/score.api';
import { scoreActions } from './slice/score.slice';
import { scoreInfoSelector, scoreLoadSelector } from './slice/score.selectors';
import { LOADING_STATUS } from '../../../shared/constants/loading-status';
import { format } from 'date-fns';

export const Score = () => {
  const dispatch = useAppDispatch();

  const scoreInfo = useAppSelector(scoreInfoSelector);
  const loadingStatus = useAppSelector(scoreLoadSelector);

  useEffect(() => {
    dispatch(scoreActions.fetchPending());

    //*--* todo: вынести в хук
    getScore()
      .then((response) => {
        dispatch(scoreActions.fetchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  }, []);

  //*--* todo: ПОДУМАТЬ КАК СДЕЛАТЬ ЛУЧШЕ ЛОАДЕР
  if (loadingStatus !== LOADING_STATUS.LOADED) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>SCORE COMPONENT</div>
      <div>{`КОМПЬЮТЕР ВЫИГРАЛ РАЗ: ${scoreInfo?.result?.ai}`}</div>
      <div>{`ИГРОК ВЫИГРАЛ РАЗ: ${scoreInfo?.result?.player}`}</div>
      <div>
        {scoreInfo?.result.list.map((item, index) => {
          return (
            <div key={index}>
              №: {index + 1}; ПОБЕДИТЕЛЬ: {item.winner}; ВРЕМЯ:{' '}
              {format(new Date(item.ts), 'dd.MM.yyyy HH:mm:ss')}
            </div>
          );
        })}
      </div>
    </>
  );
};
