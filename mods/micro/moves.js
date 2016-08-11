'use strict';

exports.BattleMovedex = {
  dizzypunch: {
    inherit: true,
    name: "Meningitis",
    accuracy: 60,
    desc: "An acute inflammation of the protective membranes covering the brain and spinal cord. 50% chance to confuse opponent.",
    shortDesc: "An acute inflammation of the protective membranes covering the brain and spinal cord. 50% chance to confuse opponent.",
    secondary: {
      chance: 50,
      volatileStatus: 'confusion',
    },
  },
  defensecurl: {
    inherit: true,
    name: "Capsule",
    desc: "A polysaccharide layer that lies outside the cell envelope. It  is considered a virulence factor because it enhances the ability of bacteria to cause disease (e.g. prevents phagocytosis). Raises defense.",
    shortDesc: "A polysaccharide layer that lies outside the cell envelope. It  is considered a virulence factor because it enhances the ability of bacteria to cause disease (e.g. prevents phagocytosis). Raises defense.",
  },
  ember: {
    inherit: true,
    name: "Abscess",
    desc: "A circumscribed collection of purulent exudate frequently associated with swelling and other signs of inflammation. 10% chance to burn.",
    shortDesc: "A circumscribed collection of purulent exudate frequently associated with swelling and other signs of inflammation. 10% chance to burn.",
  },
  surf: {
    inherit: true,
    name: "Pneumonia",
    desc: "An inflammatory condition of the lung affecting primarily the microscopic air sacs known as alveoli.",
    shortDesc: " an inflammatory condition of the lung affecting primarily the microscopic air sacs known as alveoli.",
    accuracy: 85,
  },
  boneclub: {
    inherit: true,
    name: "Osteomyelitis",
    desc: "Infection and inflammation of the bone and bone marrow.",
    shortDesc: "Infection and inflammation of the bone and bone marrow.",
  },
  firepunch: {
    inherit: true,
    name: "Endocarditis",
    accuracy: 85,
    desc: "An inflammation of the inner layer of the heart, the endocardium. It usually involves the heart valves. 10% chance to burn.",
    shortDesc: "An inflammation of the inner layer of the heart, the endocardium. It usually involves the heart valves. 10% chance to burn.",
    secondary: false,
  },
  furyswipes: {
    inherit: true,
    name: "Infect Wound",
    desc: "Replicating organisms in wound injure tissue.",
    shortDesc: "Replicating organisms in wound injure tissue.",
  },
  poisonpowder: {
    inherit: true,
    name: "Food Poison",
  },
  thundershock: {
    inherit: true,
    name: "Toxic Shock",
    secondary: {
      chance: 30,
      status: 'tox',
    },
    desc: "Disease progression stems from a superantigen toxin that allows the nonspecific binding of MHC II with T cell receptors, resulting in polyclonal T cell activation. 30% chance to badly poison opponent",
    shortDesc: "Disease progression stems from a superantigen toxin that allows the nonspecific binding of MHC II with T cell receptors, resulting in polyclonal T cell activation. 30% chance to badly poison opponent",
  },
  acidarmor: {
    inherit: true,
    name: "Biofilm",
    desc: "Biofilm extracellular polymeric substance, which is also referred to as slime (although not everything described as slime is a biofilm), is a polymeric conglomeration generally composed of extracellular DNA, proteins, and polysaccharides. Raises defense.",
    shortDesc: "Biofilm extracellular polymeric substance, which is also referred to as slime (although not everything described as slime is a biofilm), is a polymeric conglomeration generally composed of extracellular DNA, proteins, and polysaccharides. Raises defense.",
  },
  sonicboom: {
    inherit: true,
    name: "Otitis Media",
  },
  flash: {
    inherit: true,
    name: "Strain",
    desc: "Make multiple serotypes to evade opponent's immune system",
    shortDesc: "Make multiple serotypes to evade opponent's immune system",
  },
  lick: {
    inherit: true,
    name: "Pharyngitis",
    secondary: false,
    desc: "",
    shortDesc: "",
  },
  tackle: {
    inherit: true,
    name: "Impetigo",
  },
  scratch: {
    inherit: true,
    name: "Cellulitis",
    secondary: {
      chance: 50,
      status: 'brn',
    },
    desc: "50% chance to burn",
    shortDesc: "50% chance to burn",
  },
  firespin: {
    inherit: true,
    name: "Rheumatic Fever",
    secondary: {
      chance: 10,
      status: 'brn',
    },
  },
  crabhammer: {
    inherit: true,
    name: "Glomerulonephritis",
  },
  stunspore: {
    inherit: true,
    name: "Sepsis",
    status: 'brn',
    desc: "Burn the target",
    shortDesc: "Burn the target",
  },
  petaldance: {
    inherit: true,
    name: "Scarlet Fever",
  },
  bite: {
    inherit: true,
    name: "Eat Flesh",
  },
  acid: {
    inherit: true,
    name: "Pyrogenic Exotoxin",
    secondary: {
      chance: 30,
      status: 'psn',
    }
  },
  cut: {
    inherit: true,
    name: "Hemolysis",
  },
  amnesia: {
    inherit: true,
    name: "M Protein",
    boosts: {
      spd: 2,
    },
    desc: "Raises the user's Special Defense by 2 stages.",
    shortDesc: "Raises the user's Sp. Def by 2.",
  },
  rockslide: {
    inherit: true,
    name: "Diarrhea",
    basePower: 40,
  },
  rockthrow: {
    inherit: true,
    name: "Mega Colon",
    accuracy: 70,
    secondary: {
      chance: 40,
      status: 'tox',
    },
    desc: "40% chance to badly poison",
    shortDesc: "40% chance to badly poison",
  },
  stringshot: {
    inherit: true,
    name: "Spores",
    boosts: {
      def: 1,
      spd: 1,
    },
    target: "self",
    desc: "Raises Def and Special Def by 1",
    shortDesc: "Raises Def and Special Def by 1",
  },
  lowkick: {
    inherit: true,
    name: "Opportunity",
    basePowerCallback: function (pokemon, target) {
      let targetHP = target.hp;
      if (targetHP >= 200) {
        return 20;
      }
      if (targetHP >= 100) {
        return 40;
      }
      if (targetHP >= 50) {
        return 60;
      }
      if (targetHP >= 25) {
        return 80;
      }
      return 100;
    },
    desc: "The lower the target's HP, the higher the attack",
    shortDesc: "The lower the target's HP, the higher the attack",
  },
  smog: {
    inherit: true,
    name: "Toxin A and B",
    secondary: {
      chance: 60,
      status: 'psn',
    },
    desc: "60% chance to poison opponent",
    shortDesc: "60% chance to poison opponent",
  },
  doubleslap: {
    inherit: true,
    name: "PID",
    secondary: {
      chance: 30,
      status: 'brn',
    },
  },
  gust: {
    inherit: true,
    name: "Dermatitis",
  },
  bubble: {
    inherit: true,
    name: "Tenosynovitis",
  },
  bide: {
    inherit: true,
    name: "Fastidious",
  },
  agility: {
    inherit: true,
    name: "Motility",
  },
  bind: {
    inherit: true,
    name: "Type IV Pili"
  },
  watergun: {
    inherit: true,
    name: "Urethritis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
  },
  spikecannon: {
    inherit: true,
    name: "Cervicitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
  },
  smokescreen: {
    inherit: true,
    name: "Conjunctivitis",
  },
  doublekick: {
    inherit: true,
    name: "Orchitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
  },
  rollingkick: {
    inherit: true,
    name: "Proctitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
  },
  lovelykiss: {
    inherit: true,
    name: "STD",
    status: 'brn',
    desc: "Burns target.",
    shortDesc: "Burns target.",
  },
  pinmissile: {
    inherit: true,
    name: "UTI",
    secondary: {
      chance: 5,
      status: 'brn',
    },
  },
  poisonsting: {
    inherit: true,
    name: "Exotoxin A",
    secondary: {
      chance: 50,
      status: 'tox',
    },
    desc: "Has a 50% chance to badly poison the target.",
    shortDesc: "50% chance to badly poison the target.",
  },
  thunder: {
    inherit: true,
    name: "Syphilis",
  },
  constrict: {
    inherit: true,
    name: "CGD",
    secondary: {
      chance: 100,
      boosts: {
        spd: -1,
      },
    },
  },
  nightshade: {
    inherit: true,
    name: "Congenital Defect",
  },
  whirlwind: {
    inherit: true,
    name: "Endoflagellate",
  },

};
