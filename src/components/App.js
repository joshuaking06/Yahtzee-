import React from 'react'
import Calculator from '../lib/Calculator'

const diceNums = [ 3, 3, 5, 5, 5 ]
console.log(Calculator.calcTopNum(5, diceNums), 'topNumSection')
console.log(Calculator.threeOfAKind(diceNums), 'threeofakind')
console.log(Calculator.fourOfAKind(diceNums), 'fourofakind')
console.log(Calculator.yahtzee(diceNums), 'yahtzee')
console.log(Calculator.chance(diceNums), 'chance')
console.log(Calculator.fullHouse(diceNums), 'fullHouse')

const App = () => {
	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	)
}

export default App
