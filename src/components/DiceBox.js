import React, { useState } from 'react'
import { S_IXGRP } from 'constants'

const DiceBox = ({ dice, setDice }) => {
	const rollDice = () => {
		const newDice = dice.map((die) => {
			if (die.inPlay === false) return die
			return { ...die, num: Math.floor(Math.random() * 6) + 1 }
		})
		setDice(newDice)
	}

	return (
		<div>
			<h3>Click the button to roll your dice</h3>
			<button className="button is-primary" onClick={rollDice}>
				Roll
			</button>
			{dice.map((die) => (
				<div key={Math.random().toString(6)} className="box">
					{die.num}
				</div>
			))}
		</div>
	)
}

export default DiceBox
