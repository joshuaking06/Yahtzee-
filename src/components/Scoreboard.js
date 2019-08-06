import React, { useState } from 'react'
import { newDice } from '../lib/data'

const Scoreboard = ({ dice, turnInfo, setTurnInfo, scores, setScore, setDice }) => {
	const diceNums = dice.map((diceObj) => diceObj.num)
	const saveScores = (name) => {
		const newScores = scores.map((score) => {
			if (score.name === name) return { ...score, score: score.getScore(diceNums) }
			return score
		})
		setDice(newDice)
		setTurnInfo({ ...turnInfo, timesRolled: 0 })
		return setScore(newScores)
	}
	return (
		<div>
			<h1>scoreboard</h1>
			{scores.map((score) => (
				<p key={score.name}>
					{score.name}
					{!score.score && <span>{score.getScore(diceNums)}</span>}
					{!score.score && (
						<button
							className="button is-primary is-small"
							onClick={() => saveScores(score.name)}
						>
							Confirm
						</button>
					)}
					{score.score && <span>{score.score}</span>}
				</p>
			))}
		</div>
	)
}

export default Scoreboard
