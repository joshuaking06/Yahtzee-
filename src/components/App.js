import React from 'react'
import Calculator from '../lib/Calculator'

const diceNums = [ 5, 1, 5, 6, 5 ]
// console.log(Calculator.calcTopNum(6, diceNums))
console.log(Calculator.threeOfAKind(diceNums))

const App = () => {
	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	)
}

export default App
