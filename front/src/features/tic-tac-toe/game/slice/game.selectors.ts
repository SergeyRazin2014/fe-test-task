import { RootState } from '../../../../app/store';

export const gameInfoSelector = (state: RootState) => state.game.gameInfo;
