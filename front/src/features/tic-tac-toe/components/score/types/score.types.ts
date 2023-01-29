export type ScoreInfo = {
  ok: boolean;
  result: {
    ai: number;
    player: number;
    X: number;
    O: number;
    list: Array<{ winner?: 'ai' | 'player'; team?: 'string'; ts: number }>;
  };
};
