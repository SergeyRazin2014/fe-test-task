import axios, { AxiosPromise } from 'axios';
import { GameInfo } from './game.types';
import { gameUrls } from './game.url';

export const getCurrentGameInfo = (): AxiosPromise<GameInfo> => {
  const promise = axios.get<GameInfo>(gameUrls.currentGame);
  return promise;
};
