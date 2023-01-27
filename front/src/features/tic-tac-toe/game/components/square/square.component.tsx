import React, { FC } from 'react';

type SquareProps = {
  title: string;
  value: number;
};

export const Square: FC<SquareProps> = (props) => {
  return <div>SQUARE</div>;
};
