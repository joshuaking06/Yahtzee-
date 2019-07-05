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
		let consecutives = [ '12345', '23456' ]
		const nonDupsStr = [ ...new Set(arr) ].sort().join('')
		let isStraight
		consecutives.forEach((str) => {
			if (nonDupsStr.includes(str)) isStraight = true
		})
		if (isStraight) return 40
		return 0
	}

	static smallStraight(arr) {
		let consecutives = [ '1234', '2345', '3456' ]
		const nonDupsStr = [ ...new Set(arr) ].sort().join('')
		let isStraight
		consecutives.forEach((str) => {
			if (nonDupsStr.includes(str)) isStraight = true
		})
		if (isStraight) return 30
		return 0
	}

	static chance(arr) {
		return arr.reduce((sum, acc) => sum + acc, 0)
	}
}

export default Calculator
