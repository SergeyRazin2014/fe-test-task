import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Game } from './features/tic-tac-toe/game/game.component';

function App() {
  return (
    <div className='App'>
      <Game test='TEST' />
    </div>
  );
}

export default App;
