import React from 'react';
import { sendMove } from './websocket';

function MoveControls({ character, gameState }) {
  const handleMove = (direction) => {
    sendMove(character, direction);
  };

  return (
    <div className="move-controls">
      <button onClick={() => handleMove('L')}>Left</button>
      <button onClick={() => handleMove('R')}>Right</button>
      <button onClick={() => handleMove('F')}>Forward</button>
      <button onClick={() => handleMove('B')}>Backward</button>
      <button onClick={() => handleMove('TL')}>Top-Left</button>
      <button onClick={() => handleMove('J')}>Jump</button>
      <button onClick={() => handleMove('A')}>Attack</button>
      
    </div>
  );
}

export default MoveControls;
