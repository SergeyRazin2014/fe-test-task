import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../../../shared/constants/loading-status';
import { ScoreInfo } from '../types/score.types';

type ScoreInitial = {
  loadingStatus: LOADING_STATUS;
  scoreInfo: ScoreInfo | null;
  error: string | null;
};

const scoreInitial: ScoreInitial = {
  loadingStatus: LOADING_STATUS.NOT_LOADED,
  scoreInfo: null,
  error: null,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState: scoreInitial,
  reducers: {
    fetchPending: (state): void => {
      state.loadingStatus = LOADING_STATUS.LOADING;
    },
    fetchSuccess: (state, action: PayloadAction<ScoreInfo>): void => {
      state.loadingStatus = LOADING_STATUS.LOADED;
      state.scoreInfo = action.payload;
    },
    fetchFailure: (state, action: PayloadAction<string>): void => {
      state.loadingStatus = LOADING_STATUS.ERROR;
      state.error = action.payload;
    },
  },
});

export const scoreActions = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;
