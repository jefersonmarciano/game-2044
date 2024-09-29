import React from 'react'

function GameOver({ score, bestScore, onRestart }) {
  return (
    <div className="game-over">
      <h2>Fim de Jogo!</h2>
      <p>Sua pontuação final: {score}</p>
      <p>Seu recorde: {bestScore}</p>
      <button onClick={onRestart}>Jogar Novamente</button>
    </div>
  )
}

export default GameOver