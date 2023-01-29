export const IS_OK_URL = 'api/';

export const gameUrls = {
  // текущая партия
  currentGame: '/api/game',

  // Сделать ход
  move: '/api/game/move',

  //Начать текущую партию сначала
  reset: '/api/game/reset',

  // Начать новую партию
  nextGame: '/api/game/next',
} as const;
