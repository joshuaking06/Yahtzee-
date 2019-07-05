import React from 'react'
import Calculator from '../lib/Calculator'

const dice = [ 5, 1, 3, 4, 6 ]
console.log(Calculator.calcTopNum(5, dice), 'topNumSection')
console.log(Calculator.threeOfAKind(dice), 'threeofakind')
console.log(Calculator.fourOfAKind(dice), 'fourofakind')
console.log(Calculator.yahtzee(dice), 'yahtzee')
console.log(Calculator.chance(dice), 'chance')
console.log(Calculator.fullHouse(dice), 'fullHouse')
console.log(Calculator.largeStraight(dice), 'large straight')
console.log(Calculator.smallStraight(dice), 'small straight')

const App = () => {
	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	)
}

export default App
