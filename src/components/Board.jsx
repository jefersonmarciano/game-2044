import React from 'react'
import Tile from './Tile'
import '../styles/Board.css'

function Board({ board, bombMode, onTileClick, explodingTiles }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile 
            key={`${rowIndex}-${colIndex}`} 
            value={value} 
            bombMode={bombMode}
            onClick={() => onTileClick(rowIndex, colIndex)}
            exploding={explodingTiles.some(tile => tile.row === rowIndex && tile.col === colIndex)}
          />
        ))
      )}
    </div>
  )
}

export default Board