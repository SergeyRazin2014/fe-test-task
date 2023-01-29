import { X, O } from '../../../../../shared/constants/marks';

export type XO = typeof X | typeof O;

export type GameInfo = {
  ok: boolean;
  result: {
    player: XO;
    ai: XO;
    board: Array<number | string[]>;
    nextMove?: XO;
    end?: boolean;
    winner?: 'ai' | 'player';
    team: XO;
  };
};

export type Move = {
  index: number;
};
