import axios, { AxiosPromise } from 'axios';
import { GameInfo, Move } from '../types/game.types';
import { gameUrls } from './game.url';

export const getCurrentGameInfo = (): AxiosPromise<GameInfo> => {
  const promise = axios.get<GameInfo>(gameUrls.currentGame);
  return promise;
};

export const move = (params: Move): AxiosPromise<GameInfo> => {
  const promise = axios.post<GameInfo>(gameUrls.move, params);
  return promise;
};

export const resetGame = (): AxiosPromise<GameInfo> => {
  const promise = axios.post<GameInfo>(gameUrls.reset);
  return promise;
};

export const nextGame = () => {
  const promise = axios.get(gameUrls.nextGame);
  return promise;
};
