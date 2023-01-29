import { scoreUrls } from './score.urls';
import axios, { AxiosPromise } from 'axios';
import { ScoreInfo } from '../types/score.types';

export const getScore = (): AxiosPromise<ScoreInfo> => {
  const promise = axios.get(scoreUrls.score);
  return promise;
};
