/**
 * Battle Team Builder Table
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Generates BattleTeambuilderTable at the start of the server.
 *
 * This is used by the client instead of the previous githook.
 *
 * @license MIT license
 */

'use strict';

const BattleTeambuilderTable = {};

const Tools = require('./tools.js');
Tools.includeData();
Tools.includeMods();

// process.stdout.write("\n  ");
for (const genIdent of [6, -6, 5, 4, 3, 2, 1]) {
  const isDoubles = (genIdent < 0);
  const genNum = (isDoubles ? 6 : genIdent);
  const gen = 'gen' + genNum;
  // process.stdout.write("" + gen + (isDoubles ? " doubles" : "") + "... ");
  const pokemon = Object.keys(Tools.data.Pokedex);
  pokemon.sort();
  const tierTable = {};
  for (const id of pokemon) {
    const template = (() => {
      if (gen === 'gen6') return Tools.getTemplate(id);
      return Tools.mod(gen + 'ou').getTemplate(id);
    })();
    if (template.gen > genNum) continue;
    const tier = (() => {
      if (isDoubles) {
        let banlist = Tools.getFormat('doublesou').banlist;
        if (banlist.indexOf(template.species) >= 0 || banlist.indexOf(template.baseSpecies) >= 0) {
          return "DUber";
        }
        banlist = Tools.getFormat('doublesuu').banlist;
        if (banlist.indexOf(template.species) >= 0 || banlist.indexOf(template.baseSpecies) >= 0) {
          return "DOU";
        }
        banlist = Tools.getFormat('doublesnu').banlist;
        if (banlist) {
          if (banlist.indexOf(template.species) >= 0 || banlist.indexOf(template.baseSpecies) >= 0) {
            return "DUU";
          }
        }
        if (template.tier === 'LC' || template.tier === 'LC Ubers' || template.tier === 'NFE') return 'NFE';
        if (!banlist) return "DUU";
        return "DNU";
      }
      return template.tier;
    })();
    if (template.forme) {
      if (template.baseSpecies in {Aegislash:1, Castform:1, Cherrim:1, Darmanitan:1, Meloetta:1}) {
        continue;
      }
    }

    if (!tierTable[tier]) tierTable[tier] = [];
    tierTable[tier].push(id);
    if (gen === 'gen6' && id in {ferroseed:1, pawniard:1, vullaby:1} && tier !== 'LC') {
      if (!tierTable['LC']) tierTable['LC'] = [];
      tierTable['LC'].push(id);
    } else if (gen === 'gen5' && id in {misdreavus:1, munchlax:1, ferroseed:1} && tier !== 'LC') {
      if (!tierTable['LC']) tierTable['LC'] = [];
      tierTable['LC'].push(id);
    }
  }

  const tiers = [];
  const items = [];
  const formatSlices = {};

  if (isDoubles) {
    BattleTeambuilderTable['doubles'] = {};
    BattleTeambuilderTable['doubles'].tiers = tiers;
    BattleTeambuilderTable['doubles'].formatSlices = formatSlices;
  } else if (gen === 'gen6') {
    BattleTeambuilderTable.tiers = tiers;
    BattleTeambuilderTable.items = items;
    BattleTeambuilderTable.formatSlices = formatSlices;
  } else {
    BattleTeambuilderTable[gen] = {};
    BattleTeambuilderTable[gen].tiers = tiers;
    BattleTeambuilderTable[gen].items = items;
    BattleTeambuilderTable[gen].formatSlices = formatSlices;
  }

  const tierOrder = (() => {
    if (gen === 'gen1' || gen === 'gen2' || gen === 'gen3') {
      return ["Uber", "OU", "BL", "UU", "BL2", "NU", "NFE", "LC Uber", "LC"];
    }
    if (gen === 'gen4') {
      return ["CAP", "Uber", "OU", "BL", "UU", "BL2", "NU", "NFE", "LC Uber", "LC"];
    }
    if (gen === 'gen5') {
      return ["CAP", "Uber", "OU", "BL", "UU", "BL2", "RU", "BL3", "NU", "NFE", "LC Uber", "LC"];
    }
    if (isDoubles) {
      return ["DUber", "DOU", "DUU", "DNU", "NFE"];
    }
    return ["CAP", "Uber", "OU", "BL", "(OU)", "UU", "BL2", "RU", "BL3", "NU", "BL4", "PU", "NFE", "LC Uber", "LC"];
  })();

  for (const tier of tierOrder) {
    if (tier === "OU" || tier === "Uber" || tier === "UU" || tier === "RU" || tier === "NU" || tier === "PU" || tier === "LC" || tier === "DOU" || tier === "DUU" || tier === "DNU" || tier === "(PU)") {
      formatSlices[tier === "(PU)" ? "FU" : tier] = tiers.length;
    }
    if (!tierTable[tier]) continue;
    if (tier === '(PU)') {
      // tiers.push(['header', "Below PU"]);
    } else if (tier.charAt(0) === '(') {
      tiers.push(['header', tier.slice(1, -1) + " by technicality"]);
    } else if (tier === "NFE") {
      tiers.push(['header', "NFEs not in a higher tier"]);
    } else {
      tiers.push(['header', tier]);
    }
    tiers.push(...tierTable[tier]);
  }

  if (isDoubles) continue;

  const itemList = Object.keys(Tools.data.Items);
  itemList.sort();

  const greatItems = [['header', "Popular items"]];
  const goodItems = [['header', "Items"]];
  const specificItems = [['header', "Pok&eacute;mon-specific items"]];
  const poorItems = [['header', "Usually useless items"]];
  const badItems = [['header', "Useless items"]];
  const unreleasedItems = [];
  if (genNum === 6) unreleasedItems.push(['header', "Unreleased"]);
  for (const id of itemList) {
    const item = Tools.getItem(id);
    if (item.gen > genNum) {
      continue;
    }
    if (item.isNonstandard && genNum !== 2) continue;
    switch (id) {
    case 'leftovers':
    case 'lifeorb':
    case 'choiceband':
    case 'choicescarf':
    case 'choicespecs':
    case 'eviolite':
    case 'assaultvest':
    case 'focussash':
    case 'powerherb':
    case 'mentalherb':
    case 'rockyhelmet':
      greatItems.push(id);
      break;
    case 'lumberry':
    case 'sitrusberry':
      if (genNum === 2) goodItems.push(id);
      else greatItems.push(id);
      break;
    case 'berryjuice':
      if (genNum === 2) poorItems.push(id);
      else goodItems.push(id);
      break;
    case 'dragonfang':
      if (genNum === 2) badItems.push(id);
      else goodItems.push(id);
      break;
    case 'mail':
      if (genNum === 6) unreleasedItems.push(id);
      else goodItems.push(id);
      break;
    // Legendaries
    case 'adamantorb':
    case 'griseousorb':
    case 'lustrousorb':
    case 'blueorb':
    case 'redorb':
    case 'souldew':
    // Other
    // fallsthrough
    case 'stick':
    case 'thickclub':
    case 'lightball':
    case 'luckypunch':
    case 'quickpowder':
    case 'metalpowder':
    case 'deepseascale':
    case 'deepseatooth':
      specificItems.push(id);
      break;
    // Fling-only
    case 'rarebone':
    case 'belueberry':
    case 'blukberry':
    case 'cornnberry':
    case 'durinberry':
    case 'hondewberry':
    case 'magostberry':
    case 'nanabberry':
    case 'nomelberry':
    case 'pamtreberry':
    case 'pinapberry':
    case 'pomegberry':
    case 'qualotberry':
    case 'rabutaberry':
    case 'razzberry':
    case 'spelonberry':
    case 'tamatoberry':
    case 'watmelberry':
    case 'wepearberry':
    case 'energypowder':
    case 'electirizer':
    case 'oldamber':
      badItems.push(id);
      break;
    // outclassed items
    case 'aguavberry':
    case 'aspearberry':
    case 'bindingband':
    case 'cheriberry':
    case 'destinyknot':
    case 'enigmaberry':
    case 'figyberry':
    case 'floatstone':
    case 'ironball':
    case 'jabocaberry':
    case 'oranberry':
    case 'machobrace':
    case 'magoberry':
    case 'pechaberry':
    case 'persimberry':
    case 'rawstberry':
    case 'ringtarget':
    case 'rowapberry':
    case 'wikiberry':
    // gen 2
    // fallsthrough
    case 'psncureberry':
    case 'przcureberry':
    case 'burntberry':
    case 'bitterberry':
    case 'iceberry':
    case 'berry':
      poorItems.push(id);
      break;
    default:
      if (item.name.endsWith(" Ball")) {
        badItems.push(id);
      } else if (item.name.endsWith(" Fossil")) {
        badItems.push(id);
      } else if (item.name.endsWith(" Gem") && item.name !== "Normal Gem") {
        if (genNum === 6) {
          unreleasedItems.push(id);
        } else if (item.name === "Flying Gem") {
          greatItems.push(id);
        } else {
          goodItems.push(id);
        }
      } else if (item.name.endsWith(" Drive")) {
        specificItems.push(id);
      } else if (item.megaStone) {
        specificItems.push(id);
      } else {
        goodItems.push(id);
      }
    }
  }
  items.push(...greatItems);
  items.push(...goodItems);
  items.push(...specificItems);
  items.push(...poorItems);
  items.push(...badItems);
  items.push(...unreleasedItems);
}

//
// Learnset table
//

const learnsets = {};
BattleTeambuilderTable.learnsets = learnsets;
for (const id in Tools.data.Learnsets) {
  const learnset = Tools.data.Learnsets[id].learnset;
  learnsets[id] = {};
  for (const moveid in learnset) {
    const gens = learnset[moveid].map(x => Number(x[0]));
    const minGen = Math.min(...gens);
    if (minGen === 6) learnsets[id][moveid] = '6';
    if (minGen === 5) learnsets[id][moveid] = '56';
    if (minGen === 4) learnsets[id][moveid] = '456';
    if (minGen === 3) learnsets[id][moveid] = '3456';
    if (gens.indexOf(6) >= 0) learnsets[id][moveid] += 'p';
  }
}
const G2Learnsets = Tools.mod('gen2ou').data.Learnsets;
for (const id in G2Learnsets) {
  const learnset = G2Learnsets[id].learnset;
  for (const moveid in learnset) {
    const gens = learnset[moveid].map(x => Number(x[0]));
    const minGen = Math.min(...gens);
    if (!learnsets[id][moveid]) learnsets[id][moveid] = ''; // should never happen
    if (minGen === 2) learnsets[id][moveid] = '2' + learnsets[id][moveid];
    if (minGen === 1) learnsets[id][moveid] = '12' + learnsets[id][moveid];
  }
}

//
// Past gen table
//
const getOverrides = (genData, nextGenData, startingOverrides={}) => {
  let overrides = Object.assign({}, startingOverrides);
  const overrideStats = {};
  overrides.overrideStats = overrideStats;
  for (const id in genData.Pokedex) {
    const pastEntry = genData.Pokedex[id];
    const nowEntry = Tools.data.Pokedex[id];
    for (const stat in pastEntry.baseStats) {
      if (stat === 'spd' && genData.Scripts.gen === 1) continue;
      if (pastEntry.baseStats[stat] !== nowEntry.baseStats[stat]) {
        if (!overrideStats[id]) overrideStats[id] = {};
        overrideStats[id][stat] = pastEntry.baseStats[stat];
      }
    }
  }

  const overrideBP = {};
  overrides.overrideBP = overrideBP;
  const overrideAcc = {};
  overrides.overrideAcc = overrideAcc;
  const overridePP = {};
  overrides.overridePP = overridePP;
  const overrideMoveDesc = {};
  overrides.overrideMoveDesc = overrideMoveDesc;
  for (const id in genData.Movedex) {
    const pastEntry = genData.Movedex[id];
    const nowEntry = Tools.data.Movedex[id];
    const nextEntry = nextGenData.Movedex[id];
    if (pastEntry.basePower !== nowEntry.basePower) {
      overrideBP[id] = pastEntry.basePower;
    }
    if (pastEntry.accuracy !== nowEntry.accuracy) {
      overrideAcc[id] = pastEntry.accuracy;
    }
    if (pastEntry.pp !== nowEntry.pp) {
      overridePP[id] = pastEntry.pp;
    }
    if (pastEntry.shortDesc !== nextEntry.shortDesc) {
      overrideMoveDesc[id] = pastEntry.shortDesc;
    }
  }

  const overrideItemDesc = {};
  overrides.overrideItemDesc = overrideItemDesc;
  for (const id in genData.Items) {
    const pastEntry = genData.Items[id];
    const nextEntry = nextGenData.Items[id];
    if (!nextEntry) continue; // amulet coin
    if (pastEntry.desc !== nextEntry.desc) {
      overrideItemDesc[id] = pastEntry.desc;
    }
  }
  return overrides;
}

let canonModsByGen = {};
let customModsByGen = {};
for (const modName of Object.keys(Tools.moddedTools)) {
  const mod = Tools.moddedTools[modName];
  if (!customModsByGen['gen'+mod.gen]) customModsByGen['gen'+mod.gen] = {};
  if (modName === 'gen'+mod.gen) {
    canonModsByGen[modName] = mod.includeData().data;
  } else {
    customModsByGen['gen'+mod.gen][modName] = mod.includeData().data;
  }
}



let genNextData;
for (const canonGenName of Object.keys(canonModsByGen).sort().reverse()) {
  const genData = canonModsByGen[canonGenName];
  // compare with younger gen for overrides
  if(genNextData) {
    BattleTeambuilderTable[canonGenName] = getOverrides(genData, genNextData, BattleTeambuilderTable[canonGenName]);
  }
  // compare non-canon mods with their inherited generation and get additional overrides
  for (const modName of Object.keys(customModsByGen[canonGenName])) {
    BattleTeambuilderTable[modName] = getOverrides(customModsByGen[canonGenName][modName], genData, BattleTeambuilderTable[canonGenName]);
  }
  genNextData = genData;
}

exports.BattleTeambuilderTable = BattleTeambuilderTable;
