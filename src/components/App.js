import React, { useState } from 'react'
import DiceBox from './DiceBox'
import Scoreboard from './ScoreBoard'
import { newDice, newScores } from '../lib/data'

const App = () => {
	const [ dice, setDice ] = useState(newDice)
	const [ turnInfo, setTurnInfo ] = useState({
		timesRolled: 0,
		player: 'Player 1'
	})
	const [ player1Scores, setPlayer1Scores ] = useState(newScores)
	const [ player2Scores, setPlayer2Scores ] = useState(newScores)

	return (
		<div className="container">
			<h1>Yahtzee</h1>
			<DiceBox dice={dice} setDice={setDice} turnInfo={turnInfo} setTurnInfo={setTurnInfo} />
			<Scoreboard
				dice={dice}
				turnInfo={turnInfo}
				scores={turnInfo.player === 'Player 1' ? player1Scores : player2Scores}
				setScore={turnInfo.player === 'Player 1' ? setPlayer1Scores : setPlayer2Scores}
				setTurnInfo={setTurnInfo}
				setDice={setDice}
			/>
		</div>
	)
}

export default App
