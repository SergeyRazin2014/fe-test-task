import { GameInfo } from '../types/game.types';

export const getAiPosition = (
  gameInfo1: GameInfo,
  gameInfo2: GameInfo
): number => {
  const aiMark = gameInfo2.result.ai;

  const arr1 = gameInfo1.result.board.flat(1);
  const arr2 = gameInfo2.result.board.flat(1);

  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === aiMark && arr1[i] !== arr2[i]) {
      return i + 1;
    }
  }

  throw Error("ai didn't makes move");
};
