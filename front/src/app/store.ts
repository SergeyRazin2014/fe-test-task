import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { gameReducer } from '../features/tic-tac-toe/components/game/slice/game.slice';
import { scoreReducer } from '../features/tic-tac-toe/components/score/slice/score.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer,
    score: scoreReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
