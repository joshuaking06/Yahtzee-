import React, { useState } from 'react'
import Calculator from '../lib/Calculator'
import DiceBox from './DiceBox'
import Scoreboard from './ScoreBoard'
import { newDice, newScores } from '../lib/data'

// const testDice = [ 5, 3, 3, 3, 5 ]
// console.log(newScores[8].getScore(testDice), newScores[8].name)

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
				scores={player1Scores}
				setScore={setPlayer1Scores}
				setTurnInfo={setTurnInfo}
			/>
		</div>
	)
}

export default App
