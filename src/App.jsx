import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import Board from './components/Board'
import GameOver from './components/GameOver'
import { initializeGame, move, isGameOver } from './utils/gameLogic'

function App() {
  const [board, setBoard] = useState(initializeGame())
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('bestScore')
    return saved !== null ? parseInt(saved, 10) : 0
  })
  const [gameOver, setGameOver] = useState(false)

  const handleMove = (direction) => {
    if (!gameOver) {
      const { newBoard, newScore } = move(board, direction)
      setBoard(newBoard)
      setScore((prevScore) => {
        const updatedScore = prevScore + newScore
        if (updatedScore > bestScore) {
          setBestScore(updatedScore)
          localStorage.setItem('bestScore', updatedScore.toString())
        }
        return updatedScore
      })
      
      if (isGameOver(newBoard)) {
        setGameOver(true)
      }
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        handleMove(event.key)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [board, gameOver, bestScore])

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
  }

  return (
    <div className="app" {...handlers}>
      <h1>2048</h1>
      <div className="game-container">
        <div className="score-container">
          <div className="score">Pontuação: {score}</div>
          <div className="best-score">Recorde: {bestScore}</div>
        </div>
        <Board board={board} />
      </div>
      {gameOver && <GameOver score={score} bestScore={bestScore} onRestart={resetGame} />}
      <button onClick={resetGame}>Reiniciar</button>
    </div>
  )
}

export default App