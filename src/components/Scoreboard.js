import React, { useState } from 'react'
import { newDice } from '../lib/data'

const Scoreboard = ({ dice, turnInfo, setTurnInfo, scores, setScore, setDice }) => {
	const diceNums = dice.map((diceObj) => diceObj.num)
	const saveScores = (name) => {
		// calculate the individual score
		const newScores = scores.map((score) => {
			if (score.name === name) return { ...score, score: score.getScore(diceNums) }
			return score
		})
		const nextPlayer = turnInfo.player === 'Player 1' ? 'Player 2' : 'Player 1'
		setTurnInfo({ player: nextPlayer, timesRolled: 0 })
		setDice(newDice)
		// calculate the totals of sections once all the individual categories are marked
		const newAllScores = newScores.map((score) => {
			if (score.name === 'Upper Total') {
				const total = newScores
					.filter((score) => score.section && score.section === 'upper')
					.reduce((sum, acc) => sum + (acc.score || 0), 0)
				if (total > 62) return { ...score, score: total + 35, bonus: true }
				return { ...score, score: total }
			}
			if (score.name === 'Lower Total') {
				const total = newScores
					.filter((score) => score.section && score.section === 'lower')
					.reduce((sum, acc) => sum + (acc.score || 0), 0)
				return { ...score, score: total }
			}
			return score
		})
		// calculate grand total once upper and lower sections are finalized
		const newAllScoresWithGrandTotal = newAllScores.map((score) => {
			if (score.name === 'Grand Total') {
				const total = newAllScores
					.filter((score) => !score.section)
					.reduce((sum, acc) => sum + (acc.score || 0), 0)
				return { ...score, score: total }
			}
			return score
		})
		return setScore(newAllScoresWithGrandTotal)
	}
	return (
		<div>
			<h1>{turnInfo.player} scoreboard</h1>
			{scores.map((score) => (
				<p key={score.name}>
					{score.name}:
					{score.score === undefined &&
					score.getScore && <span>{score.getScore(diceNums)}</span>}
					{score.score === undefined &&
					score.getScore && (
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
