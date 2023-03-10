import React, { FC, useContext } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { gameInfoSelector } from './slice/game.selectors';
import { useCurrentGameInfo } from './hooks/useCurrentGameInfo';
import { Board } from './components/board/board.component';
import { useResetGame } from './hooks/useResetGame';
import { useNextGame } from './hooks/useNextGame';
import { useMove } from './hooks/useMove';
import { GameLog } from './components/game-log/game-log.component';
import { Space, Typography, Button } from 'antd';
import { TicTacToeContext } from '../../context/tic-tac-toe.context';

const { Text } = Typography;

export const Game: FC = () => {
  useCurrentGameInfo();
  const context = useContext(TicTacToeContext);

  const resetGameClick = useResetGame();
  const nextGameClick = useNextGame();
  const onSquareClick = useMove();

  const gameInfo = useAppSelector(gameInfoSelector);

  return (
    <>
      <div className='tic-tac-toe__players'>
        <div>
          <Text>Player: {gameInfo?.result?.player}</Text>
        </div>
        <div>
          <Text>AI: {gameInfo?.result?.ai}</Text>
        </div>
      </div>

      <div className='tic-tac-toe__buttons'>
        <Space>
          <Button onClick={resetGameClick}>reset game</Button>
          <Button onClick={nextGameClick}>next game</Button>
        </Space>
      </div>
      {gameInfo && (
        <Board
          boardData={gameInfo.result.board.flat(1)}
          isDisabled={gameInfo.result.end}
          onSquareClick={onSquareClick}
        />
      )}
      {!!context.logItems.length && <GameLog />}
    </>
  );
};
