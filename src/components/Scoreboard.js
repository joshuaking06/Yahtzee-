import React, { useState } from 'react'

const Scoreboard = ({ dice, turnInfo, scores }) => {
	const diceNums = dice.map((diceObj) => diceObj.num)
	return (
		<div>
			<h1>scoreboard</h1>
			{scores.map((score) => (
				<p key={score.name}>
					{score.name} <span>{score.getScore(diceNums)}</span>
				</p>
			))}
		</div>
	)
}

export default Scoreboard
