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
		getScore: (arr) => Calculator.calcTopNum(1, arr)
	},
	{
		name: 'Twos',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(2, arr)
	},
	{
		name: 'Threes',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(3, arr)
	},
	{
		name: 'Fours',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(4, arr)
	},
	{
		name: 'Fives',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(5, arr)
	},
	{
		name: 'Sixes',
		score: undefined,
		getScore: (arr) => Calculator.calcTopNum(6, arr)
	},
	{
		name: 'Three of a Kind',
		score: undefined,
		getScore: Calculator.threeOfAKind,
		counter: Calculator.counter
	},
	{
		name: 'Four of a Kind',
		score: undefined,
		getScore: Calculator.fourOfAKind,
		counter: Calculator.counter
	},
	{
		name: 'Full House',
		score: undefined,
		getScore: Calculator.fullHouse,
		counter: Calculator.counter
	},
	{
		name: 'Small Straight',
		score: undefined,
		getScore: Calculator.smallStraight
	},
	{
		name: 'Large Straight',
		score: undefined,
		getScore: Calculator.largeStraight
	},
	{
		name: 'Yahtzee',
		score: undefined,
		getScore: Calculator.yahtzee,
		counter: Calculator.counter
	},
	{
		name: 'Chance',
		score: undefined,
		getScore: Calculator.chance
	}
]

export { newDice, newScores }
