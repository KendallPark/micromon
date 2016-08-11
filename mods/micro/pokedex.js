exports.BattlePokedex = {
	missingno: {
		num: 0,
		species: "Missingno.",
		types: ["Bird", "Normal"],
		gender: "N",
		baseStats: {hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29},
		abilities: {},
		heightm: 3,
		weightkg: 1590.8,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	bulbasaur: {
		num: 1,
		species: "Bulbasaur",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
		abilities: {},
		heightm: 0.7,
		weightkg: 6.9,
		color: "Green",
		evos: ["ivysaur"],
		eggGroups: ["Monster", "Grass"],
	},
	ivysaur: {
		num: 2,
		species: "Ivysaur",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60},
		abilities: {},
		heightm: 1,
		weightkg: 13,
		color: "Green",
		prevo: "bulbasaur",
		evos: ["venusaur"],
		evoLevel: 16,
		eggGroups: ["Monster", "Grass"],
	},
	venusaur: {
		num: 3,
		species: "Venusaur",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80},
		abilities: {},
		heightm: 2,
		weightkg: 100,
		color: "Green",
		prevo: "ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
	charmander: {
		num: 4,
		species: "Charmander",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 39, atk: 52, def: 43, spa: 50, spd: 50, spe: 65},
		abilities: {},
		heightm: 0.6,
		weightkg: 8.5,
		color: "Red",
		evos: ["charmeleon"],
		eggGroups: ["Monster", "Dragon"],
	},
	charmeleon: {
		num: 5,
		species: "Charmeleon",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 58, atk: 64, def: 58, spa: 65, spd: 65, spe: 80},
		abilities: {},
		heightm: 1.1,
		weightkg: 19,
		color: "Red",
		prevo: "charmander",
		evos: ["charizard"],
		evoLevel: 16,
		eggGroups: ["Monster", "Dragon"],
	},
	charizard: {
		num: 6,
		species: "Charizard",
		types: ["Fire", "Flying"],
		gender: "N",
		baseStats: {hp: 78, atk: 84, def: 78, spa: 85, spd: 85, spe: 100},
		abilities: {},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Red",
		prevo: "charmeleon",
		evoLevel: 36,
		eggGroups: ["Monster", "Dragon"],
	},
	squirtle: {
		num: 7,
		species: "Squirtle",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 50, spe: 43},
		abilities: {},
		heightm: 0.5,
		weightkg: 9,
		color: "Blue",
		evos: ["wartortle"],
		eggGroups: ["Monster", "Water 1"],
	},
	wartortle: {
		num: 8,
		species: "Wartortle",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58},
		abilities: {},
		heightm: 1,
		weightkg: 22.5,
		color: "Blue",
		prevo: "squirtle",
		evos: ["blastoise"],
		evoLevel: 16,
		eggGroups: ["Monster", "Water 1"],
	},
	blastoise: {
		num: 9,
		species: "Blastoise",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 79, atk: 83, def: 100, spa: 85, spd: 85, spe: 78},
		abilities: {},
		heightm: 1.6,
		weightkg: 85.5,
		color: "Blue",
		prevo: "wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
	},
}
