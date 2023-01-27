import { useAppDispatch } from '../../../../app/hooks';
import { useEffect, useState } from 'react';
import { gameActions } from '../slice/game.slice';
import { getCurrentGameInfo } from '../api/game.api';
import { GameInfo } from '../api/game.types';

export const useCurrentGameInfo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(gameActions.fetchPending());

    getCurrentGameInfo()
      .then((response) => {
        dispatch(gameActions.fetchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  }, []);
};
