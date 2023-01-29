import { RootState } from '../../../../../app/store';

export const scoreInfoSelector = (state: RootState) => state.score.scoreInfo;
export const scoreLoadSelector = (state: RootState) =>
  state.score.loadingStatus;
