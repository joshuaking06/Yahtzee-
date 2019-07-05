class Calculator {
	static calcTopNum(num, arr) {
		const total = arr.filter((diceNum) => diceNum === num).reduce((sum, acc) => sum + acc, 0)
		return total
	}
}

export default Calculator
