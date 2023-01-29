import { RootState } from '../../../../../app/store';

export const gameInfoSelector = (state: RootState) => state.game.gameInfo;
export const gameLoadSelector = (state: RootState) => state.game.loadingStatus;
