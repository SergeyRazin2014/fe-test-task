export type GameInfo = {
  ok: boolean;
  result: {
    player: 'X' | 'O';
    ai: 'X' | 'O';
    board: number[][];
  };
};
