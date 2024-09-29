import React from 'react'
import '../styles/Tile.css'

function Tile({ value }) {
  const classNames = ['tile', `tile-${value}`]

  return (
    <div className={classNames.join(' ')}>
      {value !== 0 && value}
    </div>
  )
}

export default Tile