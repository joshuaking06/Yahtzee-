class Calculator {
	static calcTopNum(num, arr) {
		const total = arr.filter((diceNum) => diceNum === num).reduce((sum, acc) => sum + acc, 0)
		return total
	}

	static counter(arr, num) {
		return arr.filter((diceNum) => diceNum === num).length
	}

	static threeOfAKind(arr) {
		const hasThree = arr.some((num) => this.counter(arr, num) > 2)
		if (hasThree) return arr.reduce((sum, acc) => sum + acc, 0)
		return 0
	}

	static fourOfAKind(arr) {
		const hasFour = arr.some((num) => this.counter(arr, num) > 3)
		if (hasFour) return arr.reduce((sum, acc) => sum + acc, 0)
		return 0
	}

	static yahtzee(arr) {
		const hasFive = arr.some((num) => this.counter(arr, num) > 4)
		if (hasFive) return arr.reduce((sum, acc) => sum + acc, 0)
		return 0
	}

	static fullHouse(arr) {
		const hasFullHouse = arr.every((num) => this.counter(arr, num) > 1)
		if (hasFullHouse) return 25
		return 0
	}

	static largeStraight(arr) {
		const nonDups = [ ...new Set(arr) ].sort()
		if (nonDups.length < 5) return 0
		const total = nonDups.reduce((sum, acc) => sum + acc, 0)
		if (total === 15 || total === 20) return 40
		return 0
	}

	static smallStraight(arr) {
		const nonDups = [ ...new Set(arr) ].sort()
		if (nonDups.length < 4) return 0
		return nonDups
	}

	static chance(arr) {
		return arr.reduce((sum, acc) => sum + acc, 0)
	}
}

export default Calculator
