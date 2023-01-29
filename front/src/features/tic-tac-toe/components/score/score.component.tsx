import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { scoreInfoSelector, scoreLoadSelector } from './slice/score.selectors';
import { LOADING_STATUS } from '../../../../shared/constants/loading-status';
import { format } from 'date-fns';
import { useScore } from './hooks/useScore';
import { Table } from 'antd';
import { Typography, Spin } from 'antd';

const columns = [
  {
    title: '',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Winner',
    dataIndex: 'winner',
    key: 'winner',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];

/**
 * Компонент для отображения результатов всех сыгранных игр
 * */
export const Score = () => {
  const scoreInfo = useAppSelector(scoreInfoSelector);
  const loadingStatus = useAppSelector(scoreLoadSelector);

  useScore();

  if (loadingStatus !== LOADING_STATUS.LOADED) {
    return <Spin />;
  }

  const dataSource = scoreInfo?.result.list.map((item, index) => {
    return {
      ...item,
      number: index + 1,
      winner: item.winner ? item.winner : 'draw',
      time: format(item.ts, 'dd.MM.yyyy HH:mm:ss'),
      key: item.ts,
    };
  });

  return (
    <>
      <Typography>{`AI wins: ${scoreInfo?.result?.ai}`}</Typography>
      <Typography>{`Player wins: ${scoreInfo?.result?.player}`}</Typography>
      <div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </>
  );
};
