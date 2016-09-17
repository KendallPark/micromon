'use strict';

/**
 * Gen 1 mechanics are fairly different to those we know on current gen.
 * Therefor we need to make a lot of changes to the battle engine for this game simulation.
 * This generation inherits all the changes from older generations, that must be taken into account when editing code.
 */
exports.BattleScripts = {
  inherit: 'gen2',
  gen: 2,
  debug: function (activity) {
    if (this.getFormat().debug) {
      this.add('debug', activity);
    }
  },
  randomTeam: function (side) {
    let pokemon = [];
    const first = side.n === 0

    let n = 1;
		let pokemonPool = [];
    const cat = first ? "micro" : "defender";
    for (let id in this.data.FormatsData) {
      // if (n++ <= 251 && this.data.FormatsData[id] && this.data.FormatsData[id].randomBattleMoves && this.data.FormatsData[id].category === cat) {
      if (n++ <= 251 && this.data.FormatsData[id] && this.data.FormatsData[id].randomBattleMoves && (this.data.FormatsData[id].category === "micro" || this.data.FormatsData[id].category === "defender" )) {
        pokemonPool.push(id);
      }
    }

    while (pokemon.length <= 6 && pokemonPool.length > 0) {
      let template = this.getTemplate(this.sampleNoReplace(pokemonPool));
      let set = this.randomSet(template, pokemon.length);
      pokemon.push(set);
    }

    return pokemon;
  },

  // Random set generation for Gen 1 Random Battles.
  randomSet: function (template, slot) {
    if (slot === undefined) slot = 1;
    template = this.getTemplate(template);
    if (!template.exists) template = this.getTemplate('pikachu'); // Because Gen 1.

    let movePool = template.randomBattleMoves.slice();
    let moves = [];
    let hasType = {};
    hasType[template.types[0]] = true;
    if (template.types[1]) hasType[template.types[1]] = true;
    let hasMove = {};
    let counter = {};
    let setupType = '';

    // Add the mandatory move
    if (template.essentialMove) {
      moves.push(template.essentialMove);
    }
    do {
      // Choose next 4 moves from learnset/viable moves and add them to moves list:
      while (moves.length < 4 && movePool.length) {
        let moveid = this.sampleNoReplace(movePool);
        moves.push(moveid);
      } // End of the check for more than 4 moves on moveset.
    } while (moves.length < 4 && movePool.length);

    let levelScale = {
      LC: 96,
      NFE: 90,
      UU: 85,
      BL: 83,
      OU: 79,
      Uber: 74,
    };
    // Hollistic judgment.
    let customScale = {
      Caterpie: 99, Kakuna: 99, Magikarp: 99, Metapod: 99, Weedle: 99, Pichu: 99, Smoochum: 99,
      Clefairy: 95, "Farfetch'd": 99, Igglybuff: 99, Jigglypuff: 99, Ditto: 99, Mewtwo: 70,
      Dragonite: 85, Cloyster: 83, Staryu: 90,
    };

    let level = levelScale[template.tier] || 90;
    if (customScale[template.name]) level = customScale[template.name];

    return {
      name: template.nickname || template.name,
      species: template.name,
      moves: moves,
      ability: 'None',
      evs: {hp: 255, atk: 255, def: 255, spa: 255, spd: 255, spe: 255},
      ivs: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30},
      item: '',
      level: level,
      shiny: false,
      gender: false,
    };
  },
}
