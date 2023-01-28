import { useCallback, useContext } from 'react';
import { gameActions } from '../slice/game.slice';
import { move } from '../api/game.api';
import { getAiPosition } from '../utils/getAiPosition';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { TicTacToeContext } from '../../context/tic-tac-toe.context';
import { gameInfoSelector } from '../slice/game.selectors';

export const useSquareClick = () => {
  const dispatch = useAppDispatch();
  const context = useContext(TicTacToeContext);
  const gameInfo = useAppSelector(gameInfoSelector);

  const foo = useCallback(
    (val: number) => {
      context.addLogItem({
        position: val,
        actor: 'player',
        time: Date.now(),
        mark: gameInfo!.result.player,
      });

      dispatch(gameActions.fetchPending());

      move({ index: val })
        .then((response) => {
          if (!response.data.result.end) {
            context.addLogItem({
              position: getAiPosition(gameInfo!, response.data),
              mark: response.data.result.ai,
              time: Date.now(),
              actor: 'ai',
            });
          }

          dispatch(gameActions.fetchSuccess(response.data));
        })
        .catch((err) => {
          dispatch(gameActions.fetchFailure(err));
        });
    },
    [gameInfo]
  );
  return foo;
};
