import { nextGame } from '../api/game.api';
import { gameActions } from '../slice/game.slice';
import { O, X } from '../../../constants/marks';
import { useCallback, useContext } from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import { TicTacToeContext } from '../../../context/tic-tac-toe.context';

export const useNextGame = () => {
  const dispatch = useAppDispatch();
  const context = useContext(TicTacToeContext);

  const foo = useCallback(() => {
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
  }, []);
  return foo;
};
