import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { scoreInfoSelector, scoreLoadSelector } from './slice/score.selectors';
import { LOADING_STATUS } from '../../../shared/constants/loading-status';
import { format } from 'date-fns';
import { useScore } from './hooks/useScore';

/**
 * Компонент для отображения результатов всех сыгранных игр
 * */
export const Score = () => {
  const scoreInfo = useAppSelector(scoreInfoSelector);
  const loadingStatus = useAppSelector(scoreLoadSelector);

  useScore();

  //*--* todo: ПОДУМАТЬ КАК СДЕЛАТЬ ЛУЧШЕ ЛОАДЕР
  if (loadingStatus !== LOADING_STATUS.LOADED) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>{`КОМПЬЮТЕР ВЫИГРАЛ РАЗ: ${scoreInfo?.result?.ai}`}</div>
      <div>{`ИГРОК ВЫИГРАЛ РАЗ: ${scoreInfo?.result?.player}`}</div>
      <div>
        {scoreInfo?.result.list.map((item, index) => {
          return (
            <div key={index}>
              №: {index + 1}; ПОБЕДИТЕЛЬ: {item.winner}; ВРЕМЯ:{' '}
              {format(item.ts, 'dd.MM.yyyy HH:mm:ss')}
            </div>
          );
        })}
      </div>
    </>
  );
};
