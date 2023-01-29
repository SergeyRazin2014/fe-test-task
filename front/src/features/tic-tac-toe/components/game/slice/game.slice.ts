import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../../../../shared/constants/loading-status';
import { GameInfo } from '../types/game.types';

type GameState = {
  loadingStatus: LOADING_STATUS;
  gameInfo: GameInfo | null;
  error: string | null;
};

const gameInitial: GameState = {
  loadingStatus: LOADING_STATUS.NOT_LOADED,
  gameInfo: null,
  error: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: gameInitial,
  reducers: {
    fetchPending: (state): void => {
      state.loadingStatus = LOADING_STATUS.LOADING;
    },
    fetchSuccess: (state, action: PayloadAction<GameInfo>): void => {
      state.loadingStatus = LOADING_STATUS.LOADED;
      state.gameInfo = action.payload;
    },
    fetchFailure: (state, action: PayloadAction<string>): void => {
      state.loadingStatus = LOADING_STATUS.ERROR;
      state.error = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
