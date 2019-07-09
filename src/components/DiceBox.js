import React, { useState } from 'react'
import { S_IXGRP } from 'constants'

const DiceBox = ({ dice, setDice }) => {
	console.log(dice)

	const rollDice = () => {
		const newDice = dice.map((die) => {
			if (die.inPlay === false) return die
			return { ...die, num: Math.floor(Math.random() * 6) + 1 }
		})
		setDice(newDice)
	}

	const keepDice = (e) => {
		const newDice = dice.map((die) => {
			if (die.id !== parseInt(e.target.id)) return die
			const status = die.inPlay
			return { ...die, inPlay: !status }
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
				<div key={die.id} className="box">
					{die.num}
					<button id={die.id} className="button is-info" onClick={keepDice}>
						Keep
					</button>
				</div>
			))}
		</div>
	)
}

export default DiceBox
