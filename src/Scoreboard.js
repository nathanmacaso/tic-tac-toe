import React from 'react'

export default function Scoreboards(props) {
  return (
    <div className="scoreboard">
      <h4>
        Player 1: {props.player1}
      </h4>
      <h4>
        Player 2: {props.player2}
      </h4>
    </div>
  )
}
