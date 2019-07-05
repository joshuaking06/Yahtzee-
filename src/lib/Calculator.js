class Calculator {
	static calcTopNum(num, arr) {
		const total = arr.filter((diceNum) => diceNum === num).reduce((sum, acc) => sum + acc, 0)
		return total
	}

	static counter(arr, num) {
		const numOfOccurences = arr.filter((diceNum) => diceNum === num).length
		return numOfOccurences
	}

	static threeOfAKind(arr) {
		const hasThree = arr.some((num) => this.counter(arr, num) > 2)
		return hasThree
	}
}

export default Calculator
