import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import Board from './components/Board'
import GameOver from './components/GameOver'
import { initializeGame, move, isGameOver, checkForBombUnlock, useBomb } from './utils/gameLogic'

function App() {
  const [board, setBoard] = useState(initializeGame())
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('bestScore')
    return saved !== null ? parseInt(saved, 10) : 0
  })
  const [gameOver, setGameOver] = useState(false)
  const [bombMode, setBombMode] = useState(false)
  const [explodingTiles, setExplodingTiles] = useState([])
  const [bombAvailable, setBombAvailable] = useState(false)

  const handleMove = (direction) => {
    if (!gameOver && !bombMode) {
      const { newBoard, newScore, tileMoved } = move(board, direction)
      if (tileMoved) {
        setBoard(newBoard)
        setScore((prevScore) => {
          const updatedScore = prevScore + newScore
          if (updatedScore > bestScore) {
            setBestScore(updatedScore)
            localStorage.setItem('bestScore', updatedScore.toString())
          }
          return updatedScore
        })
        
        if (!bombAvailable && checkForBombUnlock(newBoard)) {
          setBombAvailable(true)
        }

        if (isGameOver(newBoard)) {
          setGameOver(true)
        }
      }
    }
  }

  const handleKeyDown = (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      handleMove(event.key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [board, gameOver, bombMode])

  const handleBombClick = () => {
    setBombMode(true)
  }

  const handleTileClick = (row, col) => {
    if (bombMode) {
      const { newBoard, removedValue } = useBomb(board, row, col);
      
      const explodingTiles = [
        { row, col },
        { row: row-1, col }, { row: row+1, col }, { row, col: col-1 }, { row, col: col+1 },
        { row: row-1, col: col-1 }, { row: row-1, col: col+1 },
        { row: row+1, col: col-1 }, { row: row+1, col: col+1 }
      ].filter(tile => tile.row >= 0 && tile.row < 4 && tile.col >= 0 && tile.col < 4);
      
      setExplodingTiles(explodingTiles);
      
      setTimeout(() => {
        setExplodingTiles([]);
        setBoard(newBoard);
        setScore(prevScore => prevScore + removedValue);
        setBombMode(false);
      }, 500);
    }
  }

  const handlers = useSwipeable({
    onSwipedUp: () => handleMove('ArrowUp'),
    onSwipedDown: () => handleMove('ArrowDown'),
    onSwipedLeft: () => handleMove('ArrowLeft'),
    onSwipedRight: () => handleMove('ArrowRight'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  const resetGame = () => {
    setBoard(initializeGame())
    setScore(0)
    setGameOver(false)
    setBombAvailable(false)
    setBombMode(false)
  }

  return (
    <div className="app" {...handlers}>
      <h1>2048</h1>
      <div className="game-container">
        <div className="score-container">
          <div className="score">Pontuação: {score}</div>
          <div className="best-score">Recorde: {bestScore}</div>
        </div>
        <Board 
          board={board} 
          bombMode={bombMode}
          onTileClick={handleTileClick}
          explodingTiles={explodingTiles}
        />
      </div>
      {bombAvailable && (
        <button onClick={handleBombClick} className="bomb-button" disabled={bombMode}>
          {bombMode ? 'Bomba Ativa' : 'Usar Bomba'}
        </button>
      )}
      {gameOver && <GameOver score={score} bestScore={bestScore} onRestart={resetGame} />}
      <button onClick={resetGame}>Reiniciar</button>
    </div>
  )
}

export default App