import { useEffect } from 'react';
import { scoreActions } from '../slice/score.slice';
import { getScore } from '../api/score.api';
import { gameActions } from '../../game/slice/game.slice';
import { useAppDispatch } from '../../../../app/hooks';

export const useScore = () => {
  const dispatch = useAppDispatch();

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
};
