import React from 'react'

import '../styles/_scoreboard.scss';

const Scoreboard = ({ userWins, draws, computerWins }) => {
  return (
    <div className="scoreboard">
      <p>Player: <span>{userWins}</span></p>
      <p>Draws: <span>{draws}</span></p>
      <p>CPU: <span>{computerWins}</span></p>
    </div>
  )
}

export default Scoreboard