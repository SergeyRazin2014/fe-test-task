import { useCallback, useContext } from 'react';
import { gameActions } from '../slice/game.slice';
import { resetGame } from '../api/game.api';
import { useAppDispatch } from '../../../../../app/hooks';
import { TicTacToeContext } from '../../../context/tic-tac-toe.context';

export const useResetGame = () => {
  const dispatch = useAppDispatch();
  const context = useContext(TicTacToeContext);

  const foo = useCallback(() => {
    dispatch(gameActions.fetchPending());

    resetGame()
      .then((response) => {
        dispatch(gameActions.fetchSuccess(response.data));
        context.resetLog();
      })
      .catch((err) => {
        dispatch(gameActions.fetchFailure(err));
      });
  }, []);

  return foo;
};
