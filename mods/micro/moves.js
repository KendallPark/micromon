'use strict';

exports.BattleMovedex = {
  dizzypunch: {
    inherit: true,
    name: "Meningitis",
    accuracy: 60,
    desc: "An acute inflammation of the protective membranes covering the brain and spinal cord.",
    shortDesc: "50% chance to confuse opponent.",
    secondary: {
      chance: 50,
      volatileStatus: 'confusion',
    },
    category: "Physical",
  },
  defensecurl: {
    inherit: true,
    name: "Capsule",
    desc: "A polysaccharide layer that lies outside the cell envelope. It  is considered a virulence factor because it enhances the ability of bacteria to cause disease (e.g. prevents phagocytosis). Raises defense.",
    shortDesc: "Raises defense by 1.",
    category: "Status",
  },
  ember: {
    inherit: true,
    name: "Abscess",
    desc: "A circumscribed collection of purulent exudate frequently associated with swelling and other signs of inflammation.",
    shortDesc: "10% chance to burn.",
    category: "Physical",
  },
  surf: {
    inherit: true,
    name: "Pneumonia",
    desc: "An inflammatory condition of the lung affecting primarily the microscopic air sacs known as alveoli.",
    shortDesc: "No additional effect.",
    accuracy: 85,
    category: "Physical",
  },
  boneclub: {
    inherit: true,
    name: "Osteomyelitis",
    desc: "Infection and inflammation of the bone and bone marrow.",
    shortDesc: "10% chance of causing the target to flinch.",
    category: "Physical",
  },
  firepunch: {
    inherit: true,
    name: "Endocarditis",
    desc: "An inflammation of the inner layer of the heart, the endocardium. It usually involves the heart valves.",
    shortDesc: "10% chance to burn.",
    secondary: false,
    category: "Physical",
  },
  furyswipes: {
    inherit: true,
    name: "Infect Wound",
    desc: "Replicating organisms in wound injure tissue.",
    category: "Physical",
  },
  poisonpowder: {
    inherit: true,
    name: "Food Poison",
    category: "Status",
  },
  thundershock: {
    inherit: true,
    basePower: 75,
    name: "Toxic Shock",
    secondary: {
      chance: 30,
      status: 'tox',
    },
    desc: "Disease progression stems from a superantigen toxin that allows the nonspecific binding of MHC II with T cell receptors, resulting in polyclonal T cell activation.",
    shortDesc: "30% chance to badly poison opponent.",
  },
  acidarmor: {
    inherit: true,
    name: "Biofilm",
    desc: "Biofilm extracellular polymeric substance, which is also referred to as slime (although not everything described as slime is a biofilm), is a polymeric conglomeration generally composed of extracellular DNA, proteins, and polysaccharides.",
    shortDesc: "Boosts the user's Defense by two stages.",
  },
  sonicboom: {
    inherit: true,
    name: "Otitis Media",
    secondary: {
      chance: 10,
      volatileStatus: 'confusion',
    },
    desc: "Ear infection.",
    shortDesc: "10% chance to confuse target.",
    category: "Physical",
  },
  flash: {
    inherit: true,
    name: "Strain",
    desc: "Make multiple serotypes to evade opponent's immune system.",
    shortDesc: "Lowers the target's accuracy by one stage.",
  },
  lick: {
    inherit: true,
    name: "Pharyngitis",
    secondary: false,
    desc: "A type of inflammation, most commonly caused by an upper respiratory tract infection.",
    shortDesc: "30% chance to paralyze the target.",
    category: "Physical",
  },
  tackle: {
    inherit: true,
    name: "Impetigo",
    desc: "Contagious bacterial skin infection most common among preschool children.[1] People who play close contact sports, such as wrestling are also susceptible, regardless of age.",
    shortDesc: "No additional effect.",
    category: "Special",
  },
  scratch: {
    inherit: true,
    name: "Cellulitis",
    secondary: {
      chance: 30,
      status: 'brn',
    },
    desc: "A bacterial infection involving the inner layers of the skin. It specifically affects the dermis and subcutaneous fat.",
    shortDesc: "30% chance to burn",
    category: "Special",
  },
  firespin: {
    inherit: true,
    name: "Scarlet Fever",
    secondary: {
      chance: 10,
      status: 'brn',
    },
    desc: "The signs and symptoms include a sore throat, fever, headaches, swollen lymph nodes, and a characteristic rash. The rash is red and feels like sandpaper and the tongue may be red and bumpy. It most commonly affects children between five and fifteen years of age.",
    shortDesc: "Deals damage to the target at the end of every turn for two to five turns. 10% chance to burn.",
    category: "Physical",
  },
  crabhammer: {
    inherit: true,
    name: "Glomerulonephritis",
    desc: "A term used to refer to several kidney diseases (usually affecting both kidneys). Many of the diseases are characterised by inflammation either of the glomeruli or of the small blood vessels in the kidneys, but not all diseases necessarily have an inflammatory component.",
    shortDesc: "High critical hit rate.",
    category: "Special",
  },
  stunspore: {
    inherit: true,
    name: "Sepsis",
    status: 'brn',
    volatileStatus: 'confusion',
    desc: "A life-threatening condition that arises when the body's response to infection injures its own tissues and organs. Common signs and symptoms include fever, increased heart rate, increased breathing rate, and confusion.",
    shortDesc: "Burns and confuses the target",
  },
  outrage: {
    inherit: true,
    name: "Rheumatic Fever",
    desc: "An inflammatory disease that can involve the heart, joints, skin, and brain. The disease typically develops two to four weeks after a streptococcal throat infection. Signs and symptoms include fever, multiple painful joints, involuntary muscle movements, and occasionally a characteristic non-itchy rash known as erythema marginatum.",
    shortDesc: "Repeats for two to three turns. Confuses user at the end.",
    category: "Physical",
  },
  bite: {
    inherit: true,
    name: "Eat Flesh",
    secondary: {
      chance: 40,
      volatileStatus: 'flinch',
    },
    desc: "Necrotising fasciitis (NF), commonly known as flesh-eating disease, is a rare infection of the deeper layers of skin and subcutaneous tissues which easily spreads across the fascial plane within the subcutaneous tissue. Necrotising fasciitis is a severe disease of sudden onset that progresses rapidly.",
    shortDesc: "40% chance of causing the target to flinch.",
    category: "Physical",
  },
  acid: {
    inherit: true,
    accuracy: 75,
    basePower: 100,
    name: "Pyrogenic Exotoxin",
    secondary: {
			chance: 30,
			boosts: {
				spd: -1,
			},
		},
    desc: "Superantigen secreted by S. pyogenes. This pyrogenic exotoxin is responsible for the rash of scarlet fever and many of the symptoms of streptococcal toxic shock syndrome, also known as toxic shock like syndrome(TSLS).",
    shortDesc: "30% chance to lower the target's Special Defense by one stage.",
    category: "Special",
  },
  cut: {
    inherit: true,
    name: "Hemolysis",
    desc: "Can be caused by a large number of medical conditions, including many Gram-positive bacteria, some parasites, some autoimmune disorders, some genetic disorders, or blood with too low a solute concentration (hypotonic to cells).",
    shortDesc: "No additional effect.",
    category: "Physical",
  },
  amnesia: {
    inherit: true,
    name: "M Protein",
    boosts: {
      spd: 2,
    },
    desc: "Strongly anti-phagocytic and is a major virulence factor of Streptococcus. M proteins embody a motif that is now known to be shared by many Gram-positive bacterial surface proteins. The motif includes a conserved pentapeptide LPXTG, which precedes a hydrophobic C-terminal membrane anchor, which itself precedes a cluster of basic residues.",
    shortDesc: "Raises the user's Sp. Def by 2.",
  },
  rockslide: {
    inherit: true,
    name: "Diarrhea",
    basePower: 40,
    category: "Physical",
    desc: "The condition of having at least three loose or liquid bowel movements each day.",
    shortDesc: "30% chance of causing the target to flinch.",
  },
  rockthrow: {
    inherit: true,
    name: "Toxic Mega Colon",
    accuracy: 70,
    basePower: 100,
    secondary: {
      chance: 30,
      status: 'tox',
    },
    desc: "An acute form of colonic distension. It is characterized by a very dilated colon (megacolon), accompanied by abdominal distension (bloating), and sometimes fever, abdominal pain, or shock.",
    shortDesc: "30% chance to badly poison",
    category: "Physical",
  },
  curse: {
    inherit: true,
    name: "Endospore",
    target: "self",
    desc: "A dormant, tough, and non-reproductive structure produced by certain bacteria from the Firmicute phylum. It is not a true spore (i.e., not an offspring), but a stripped-down, dormant form to which the bacterium can reduce itself. Endospore formation is usually triggered by a lack of nutrients, and usually occurs in gram-positive bacteria.",
    shortDesc: "Boosts the user's Attack and Defense and lowers Speed by one stage.",
  },
  reversal: {
    inherit: true,
    name: "Opportunity",
    basePowerCallback: function (pokemon, target) {
      let ratio = target.hp * 48 / target.maxhp;
      if (ratio < 2) {
        return 200;
      }
      if (ratio < 5) {
        return 150;
      }
      if (ratio < 10) {
        return 100;
      }
      if (ratio < 17) {
        return 80;
      }
      if (ratio < 33) {
        return 40;
      }
      return 20;
    },
    desc: "An opportunistic infection is an infection caused by pathogens that take advantage of an opportunity not normally available, such as a host with a weakened immune system, an altered microbiota, or breached integumentary barriers. Many of these pathogens do not cause disease in a healthy host that has a normal immune system. However, a compromised immune system, a penetrating injury, or a lack of competition from normal commensals presents an opportunity for the pathogen to infect.",
    shortDesc: "The lower the target's HP, the higher the attack.",
    category: "Special",
  },
  twineedle: {
    inherit: true,
    name: "Toxin A and B",
    secondary: {
      chance: 50,
      status: 'psn',
    },
    desc: "Toxin A alters fluid secretion leading to watery diarrhea. Toxin B is cytotoxic to epithelial cells, creating pseudomembranes.",
    shortDesc: "Hits twice. Each hit has 50% chance to poison opponent",
    category: "Special",
  },
  doubleslap: {
    inherit: true,
    name: "PID",
    secondary: {
      chance: 30,
      status: 'brn',
    },
    desc: "Pelvic inflammatory disorder (PID) is an infection of the upper part of the female reproductive system namely the uterus, fallopian tubes, and ovaries, and inside of the pelvis. Signs and symptoms, when present may include lower abdominal pain, vaginal discharge, fever, burning with urination, pain with sex, or irregular menstruation. Untreated PID can result in long term complications including infertility, ectopic pregnancy, chronic pelvic pain, and cancer.",
    shortDesc: "Hits two to five times. 30% chance to burn.",
    category: "Physical",
  },
  gust: {
    inherit: true,
    name: "Dermatitis",
    desc: "A group of diseases that result in inflammation of the skin. Also known as eczema.",
    shortDesc: "No additional effect.",
    category: "Physical",
  },
  karatechop: {
    inherit: true,
    name: "Tenosynovitis",
    desc: "Inflammation of the fluid-filled sheath (called the synovium) that surrounds a tendon. Symptoms of tenosynovitis include pain, swelling and difficulty moving the particular joint where the inflammation occurs. When the condition causes the finger to 'stick' in a flexed position, this is called 'stenosing' tenosynovitis, commonly known as 'trigger finger'. This condition often presents with comorbid tendinitis.",
    shortDesc: "High critical hit rate."
  },
  bide: {
    inherit: true,
    name: "Fastidious",
    desc: "Slow-growing and difficult to culture!",
    shortDesc: "Charges for two turns; returns double the damage received in those turns.",
    category: "Special",
  },
  agility: {
    inherit: true,
    name: "Motility",
  },
  swagger: {
    inherit: true,
    name: "Type IV Pili",
    desc: "Some pili, called type IV pili, generate motile forces. The external ends of the pili adhere to a solid substrate, either the surface to which the bacterium is attached or to other bacteria, and when the pilus contracts, it pulls the bacterium forward, like a grappling hook. Movement produced by type IV pili is typically jerky, so it is called twitching motility, as distinct from other forms of bacterial motility, such as that produced by flagella.",
    shortDesc: "Boosts speed.",
    volatileStatus: false,
    boosts: {
			spe: 1,
		},
		secondary: false,
		target: "self",
  },
  watergun: {
    inherit: true,
    name: "Urethritis",
    basePower: 70,
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
    category: "Physical",
    desc: "Inflammation of the urethra. The most common symptom is painful or difficult urination. It is usually caused by infection with bacteria. The infection is often a sexually transmitted infection (STI), but some are just non-STI urinary tract infections. Urethritis can be idiopathic, but it usually is not.",
    shortDesc: "30% chance to burn or flinch target.",
  },
  spikecannon: {
    inherit: true,
    name: "Cervicitis",
    basePower: 25,
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
    onTry: function (pokemon, target) {
      if (target.gender !== 'F') {
        this.add('-immune', target, '[msg]');
        return null;
      }
    },
    desc: "Inflammation of the uterine cervix. Cervicitis in women has many features in common with urethritis in men and many cases are caused by sexually transmitted infections.",
    shortDesc: "Hits two to five times. 30% chance to burn or flinch target. Only effects females.",
  },
  smokescreen: {
    inherit: true,
    name: "Conjunctivitis",
    desc: "Also known as pink eye, is inflammation of the outermost layer of the white part of the eye and the inner surface of the eyelid.",
    shortDesc: "Lowers the target's accuracy by one stage.",
  },
  doublekick: {
    inherit: true,
    name: "Orchitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
    onTry: function (pokemon, target) {
      if (target.gender !== 'M') {
        this.add('-immune', target, '[msg]');
        return null;
      }
    },
    desc: "Inflammation of the testes. It can also involve swelling, heavy pains and frequent infection, and is more rarely known as didymitis.",
    shortDesc: "Hits twice. 30% chance to burn or flinch target. Only effects males.",
  },
  rollingkick: {
    inherit: true,
    name: "Proctitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
      status: 'brn',
    },
    desc: "Proctitis is an inflammation of the anus and the lining of the rectum, affecting only the last 6 inches of the rectum.",
    shortDesc: "30% chance to burn or flinch target.",
  },
  lovelykiss: {
    inherit: true,
    name: "STI",
    status: 'brn',
    desc: "Infections that are commonly spread by sex, especially vaginal intercourse, anal sex and oral sex.",
    shortDesc: "Burns target.",
  },
  bubblebeam: {
    inherit: true,
    name: "UTI",
    basePower: 80,
    accuracy: 80,
    secondary: false,
    onModifyMove: function (move, source, target) {
			if (target.gender === 'F') {
				move.accuracy = 100;
        move.basePower = 70;
			} else if (target.gender === 'M') {
			  move.accuracy = 70;
        move.basePower = 100;
			}
		},
    desc: "",
    shortDesc: "If target is male, 70% accuracy and 100 base power. If target is female, 100% accuracy and 70 base power.",
  },
  poisonsting: {
    inherit: true,
    name: "Exotoxin A",
    secondary: {
      chance: 80,
      status: 'psn',
    },
    desc: "An exotoxin produced by Pseudomonas aeruginosa. It inhibits elongation factor-2 by ADP-ribosylation of EF2. This then causes the elongation of polypeptides to cease.(The mechanism of the toxin is similar to that of Diphtheria toxin.)",
    shortDesc: "80% chance to poison the target.",
  },
  wrap: {
    inherit: true,
    name: "Syphilis",
    secondary: {
      chance: 30,
      status: 'par',
    },
    pp: 2,
    desc: "The signs and symptoms of syphilis vary depending in which of the four stages it presents (primary, secondary, latent, and tertiary). The primary stage classically presents with a single chancre (a firm, painless, non-itchy skin ulceration) but there may be multiple sores. In secondary syphilis a diffuse rash which frequently involves the palms of the hands and soles of the feet occurs. There may also be sores in the mouth or vagina. In latent syphilis there are little to no symptoms which can last for years.[2] In tertiary syphilis there are gummas (soft non-cancerous growths), neurological, or heart symptoms.[3] Syphilis has been known as 'the great imitator' as it may cause symptoms similar to many other diseases.",
    shortDesc: "Traps and damages the target for 4-5 turns. 30% chance to paralyze.",
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
    desc: "Chronic granulomatous disease (CGD) is a diverse group of hereditary diseases in which certain cells of the immune system have difficulty forming the reactive oxygen compounds (most importantly the superoxide radical due to defective phagocyte NADPH oxidase) used to kill certain ingested pathogens. People with CGD are sometimes infected with organisms (particularly those that are catalase-positive) that usually do not cause disease in people with normal immune systems.",
    shortDesc: "",
  },
  eggbomb: {
    inherit: true,
    name: "Congenital Defect",
    desc: "Can lead to congenital defects, stillbirth, and/or fetal anomologies.",
    shortDesc: "No additional effect.",
  },
  whirlwind: {
    inherit: true,
    name: "Endoflagellate",
    desc: "Endoflagella are the special flagella of spirochetes that spiral tightly around the cell instead of protruding into the environment. Together, these endoflagella form an axial filament that wraps around the cell and rotates, enabling it to “corkscrew” through its medium.",
    shortDesc: "Forces a switch to a random pathogen. Priority -1.",
  },
  waterfall: {
    inherit: true,
    name: "PMC",
    desc: "Pseudomembrane Colitis is colitis (inflammation of the large intestine) resulting from infection with Clostridium difficile.",
    shortDesc: "No additional effect.",
  },
  mimic: {
    inherit: true,
    desc: "Pathogen is known to mimic other pathogens.",
  },

};
