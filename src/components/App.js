import React, { useState } from 'react'
import Calculator from '../lib/Calculator'
import DiceBox from './DiceBox'

const dice = [ 5, 1, 3, 4, 6 ]
// console.log(Calculator.calcTopNum(5, dice), 'topNumSection')
// console.log(Calculator.threeOfAKind(dice), 'threeofakind')
// console.log(Calculator.fourOfAKind(dice), 'fourofakind')
// console.log(Calculator.yahtzee(dice), 'yahtzee')
// console.log(Calculator.chance(dice), 'chance')
// console.log(Calculator.fullHouse(dice), 'fullHouse')
// console.log(Calculator.largeStraight(dice), 'large straight')
// console.log(Calculator.smallStraight(dice), 'small straight')

const App = () => {
	const [ dice, setDice ] = useState([
		{
			id: 1,
			num: 0,
			inPlay: true
		},
		{
			id: 2,
			num: 0,
			inPlay: true
		},
		{
			id: 3,
			num: 0,
			inPlay: true
		},
		{
			id: 4,
			num: 0,
			inPlay: true
		},
		{
			id: 5,
			num: 0,
			inPlay: true
		}
	])
	const [ turnInfo, setTurnInfo ] = useState({
		timesRolled: 0,
		player: 1
	})

	return (
		<div className="container">
			<h1>Yahtzee</h1>
			<DiceBox dice={dice} setDice={setDice} turnInfo={turnInfo} setTurnInfo={setTurnInfo} />
		</div>
	)
}

export default App
