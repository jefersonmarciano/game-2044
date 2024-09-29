import React from 'react'
import '../styles/Tile.css'

function Tile({ value, bombMode, onClick, exploding }) {
  const classNames = [
    'tile', 
    `tile-${value}`, 
    bombMode ? 'bomb-mode' : '',
    exploding ? 'exploding' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      {value !== 0 && value}
    </div>
  );
}

export default Tile;