import React, { FC, useContext } from 'react';
import { format } from 'date-fns';
import { TicTacToeContext } from '../../../../context/tic-tac-toe.context';
import { Table } from 'antd';

const columns = [
  {
    title: 'Actor',
    dataIndex: 'actor',
    key: 'actor',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Move',
    dataIndex: 'move',
    key: 'move',
  },
];

export const GameLog: FC = () => {
  const context = useContext(TicTacToeContext);

  const dataSource = context.logItems.map((item) => {
    return {
      ...item,
      time: format(item.time, 'HH:mm:ss'),
      move: `${item.mark}-${item.position}`,
      key: item.mark + item.position,
    };
  });

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};
