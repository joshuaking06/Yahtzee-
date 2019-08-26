import Calculator from './Calculator'

const newDice = [
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
]

const newScores = [
	{
		name: 'Ones',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(1, arr),
		section: 'upper'
	},
	{
		name: 'Twos',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(2, arr),
		section: 'upper'
	},
	{
		name: 'Threes',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(3, arr),
		section: 'upper'
	},
	{
		name: 'Fours',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(4, arr),
		section: 'upper'
	},
	{
		name: 'Fives',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(5, arr),
		section: 'upper'
	},
	{
		name: 'Sixes',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(6, arr),
		section: 'upper'
	},
	{
		name: 'Upper Total',
		score: undefined,
		bonus: false
	},
	{
		name: 'Three of a Kind',
		score: undefined,
		getScore: Calculator.threeOfAKind,
		counter: Calculator.counter,
		section: 'lower'
	},
	{
		name: 'Four of a Kind',
		score: undefined,
		getScore: Calculator.fourOfAKind,
		counter: Calculator.counter,
		section: 'lower'
	},
	{
		name: 'Full House',
		score: undefined,
		getScore: Calculator.fullHouse,
		counter: Calculator.counter,
		section: 'lower'
	},
	{
		name: 'Small Straight',
		score: undefined,
		getScore: Calculator.smallStraight,
		section: 'lower'
	},
	{
		name: 'Large Straight',
		score: undefined,
		getScore: Calculator.largeStraight,
		section: 'lower'
	},
	{
		name: 'Yahtzee',
		score: undefined,
		getScore: Calculator.yahtzee,
		counter: Calculator.counter,
		section: 'lower'
	},
	{
		name: 'Chance',
		score: undefined,
		getScore: Calculator.chance,
		section: 'lower'
	},
	{
		name: 'Lower Total',
		score: undefined
	},
	{
		name: 'Grand Total',
		score: undefined
	}
]

export { newDice, newScores }
