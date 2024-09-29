import React from 'react'
import Tile from './Tile'
import '../styles/Board.css'

function Board({ board }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        ))
      )}
    </div>
  )
}

export default Board