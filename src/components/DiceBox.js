import React from 'react'

const DiceBox = ({ dice, setDice, turnInfo, setTurnInfo }) => {
	const rollDice = () => {
		const newDice = dice.map((die) => {
			if (die.inPlay === false) return die
			return { ...die, num: Math.floor(Math.random() * 6) + 1 }
		})
		setDice(newDice)
		setTurnInfo({ ...turnInfo, timesRolled: turnInfo.timesRolled + 1 })
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
			{turnInfo.timesRolled < 3 && (
				<button className="button is-primary" onClick={rollDice}>
					Roll
				</button>
			)}
			{dice.map((die) => (
				<div key={die.id} className="box">
					<h4 className="title is-4">{die.num}</h4>
					{die.inPlay &&
					turnInfo.timesRolled < 3 && (
						<button id={die.id} className="button is-info" onClick={keepDice}>
							Keep
						</button>
					)}
					{!die.inPlay &&
					turnInfo.timesRolled < 3 && (
						<button id={die.id} className="button is-info" onClick={keepDice}>
							Put back
						</button>
					)}
				</div>
			))}
		</div>
	)
}

export default DiceBox
