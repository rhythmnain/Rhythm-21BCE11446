import React from 'react';

function Board({ stateGame, onSelectCharacter }) {
  if (!stateGamee) return null;

  const { board, players } = stateGametate;

  return (
    <div className="grid">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell ? 'character' : ''}`}
            onClick={() => cell && onSelectCharacter(cell)}
          >
            {cell || ''}
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
