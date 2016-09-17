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
    category: "Special",
    type: "Electric",
  },
  defensecurl: {
    inherit: true,
    name: "Capsule",
    desc: "A polysaccharide layer that lies outside the cell envelope. It  is considered a virulence factor because it enhances the ability of bacteria to cause disease (e.g. prevents phagocytosis). Raises defense.",
    shortDesc: "Raises defense by 1.",
    category: "Status",
    type: "Bug",
  },
  ember: {
    inherit: true,
    name: "Abscess",
    desc: "A circumscribed collection of purulent exudate frequently associated with swelling and other signs of inflammation. Abscesses may occur in any kind of solid tissue but most frequently on skin surface (where they may be superficial pustules (boils) or deep skin abscesses), in the lungs, brain, teeth, kidneys and tonsils.",
    shortDesc: "10% chance to burn.",
    category: "Physical",
    type: "Ground",
  },
  surf: {
    inherit: true,
    name: "Pneumonia",
    desc: "An inflammatory condition of the lung affecting primarily the microscopic air sacs known as alveoli.",
    shortDesc: "No additional effect.",
    accuracy: 85,
    category: "Special",
    type: "Flying",
  },
  boneclub: {
    inherit: true,
    name: "Osteomyelitis",
    desc: "Infection and inflammation of the bone and bone marrow.",
    shortDesc: "10% chance of causing the target to flinch.",
    category: "Physical",
    type: "Ground",
  },
  firepunch: {
    inherit: true,
    name: "Endocarditis",
    desc: "An inflammation of the inner layer of the heart, the endocardium. It usually involves the heart valves.",
    shortDesc: "10% chance to burn.",
    secondary: false,
    category: "Special",
    type: "Fire",
  },
  furyswipes: {
    inherit: true,
    name: "Infect Wound",
    desc: "Replicating organisms in wound injure tissue.",
    category: "Physical",
    type: "Ground",
  },
  poisonpowder: {
    inherit: true,
    name: "Food Poison",
    category: "Status",
    type: "Poison",
  },
  thundershock: {
    inherit: true,
    basePower: 75,
    name: "Toxic Shock",
    category: "Special",
    secondary: {
      chance: 30,
      status: 'tox',
    },
    desc: "Disease progression stems from a superantigen toxin that allows the nonspecific binding of MHC II with T cell receptors, resulting in polyclonal T cell activation.",
    shortDesc: "30% chance to badly poison opponent.",
    type: "Poison",
  },
  acidarmor: {
    inherit: true,
    name: "Biofilm",
    desc: "Biofilm extracellular polymeric substance, which is also referred to as slime (although not everything described as slime is a biofilm), is a polymeric conglomeration generally composed of extracellular DNA, proteins, and polysaccharides.",
    shortDesc: "Boosts the user's Defense by two stages.",
    type: "Bug",
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
    category: "Special",
    type: "Flying",
  },
  flash: {
    inherit: true,
    name: "Strain",
    desc: "Make multiple serotypes to evade opponent's immune system.",
    shortDesc: "Lowers the target's accuracy by one stage.",
    type: "Bug",
  },
  lick: {
    inherit: true,
    name: "Pharyngitis",
    secondary: false,
    desc: "A type of inflammation, most commonly caused by an upper respiratory tract infection.",
    shortDesc: "30% chance to paralyze the target.",
    category: "Special",
    type: "Flying",
  },
  tackle: {
    inherit: true,
    name: "Impetigo",
    desc: "Contagious bacterial skin infection most common among preschool children.[1] People who play close contact sports, such as wrestling are also susceptible, regardless of age.",
    shortDesc: "No additional effect.",
    category: "Physical",
    type: "Ground",
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
    category: "Physical",
    type: "Ground",
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
    type: "Ground",
  },
  crabhammer: {
    inherit: true,
    name: "Glomerulonephritis",
    desc: "A term used to refer to several kidney diseases (usually affecting both kidneys). Many of the diseases are characterised by inflammation either of the glomeruli or of the small blood vessels in the kidneys, but not all diseases necessarily have an inflammatory component.",
    shortDesc: "High critical hit rate.",
    category: "Special",
    type: "Water",
  },
  stunspore: {
    inherit: true,
    name: "Sepsis",
    status: 'brn',
    volatileStatus: 'confusion',
    desc: "A life-threatening condition that arises when the body's response to infection injures its own tissues and organs. Common signs and symptoms include fever, increased heart rate, increased breathing rate, and confusion.",
    shortDesc: "Burns and confuses the target",
    type: "Poison",
  },
  outrage: {
    inherit: true,
    name: "Rheumatic Fever",
    desc: "An inflammatory disease that can involve the heart, joints, skin, and brain. The disease typically develops two to four weeks after a streptococcal throat infection. Signs and symptoms include fever, multiple painful joints, involuntary muscle movements, and occasionally a characteristic non-itchy rash known as erythema marginatum.",
    shortDesc: "Repeats for two to three turns. Confuses user at the end.",
    category: "Special",
    type: "Fire",
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
    type: "Ground",
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
    type: "Poison",
  },
  cut: {
    inherit: true,
    name: "Hemolysis",
    desc: "Can be caused by a large number of medical conditions, including many Gram-positive bacteria, some parasites, some autoimmune disorders, some genetic disorders, or blood with too low a solute concentration (hypotonic to cells).",
    shortDesc: "No additional effect.",
    category: "Special",
    type: "Fire",
  },
  amnesia: {
    inherit: true,
    name: "M Protein",
    boosts: {
      spd: 2,
    },
    desc: "Strongly anti-phagocytic and is a major virulence factor of Streptococcus. M proteins embody a motif that is now known to be shared by many Gram-positive bacterial surface proteins. The motif includes a conserved pentapeptide LPXTG, which precedes a hydrophobic C-terminal membrane anchor, which itself precedes a cluster of basic residues.",
    shortDesc: "Raises the user's Sp. Def by 2.",
    type: "Bug",
  },
  rockslide: {
    inherit: true,
    name: "Diarrhea",
    basePower: 40,
    desc: "The condition of having at least three loose or liquid bowel movements each day.",
    shortDesc: "30% chance of causing the target to flinch.",
    category: "Physical",
    type: "Rock",
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
    type: "Rock",
  },
  curse: {
    inherit: true,
    name: "Endospore",
    target: "self",
    desc: "A dormant, tough, and non-reproductive structure produced by certain bacteria from the Firmicute phylum. It is not a true spore (i.e., not an offspring), but a stripped-down, dormant form to which the bacterium can reduce itself. Endospore formation is usually triggered by a lack of nutrients, and usually occurs in gram-positive bacteria.",
    shortDesc: "Boosts the user's Attack and Defense and lowers Speed by one stage.",
    type: "Bug",
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
    type: "Bug",
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
    type: "Poison",
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
    type: "Grass",
  },
  gust: {
    inherit: true,
    name: "Dermatitis",
    desc: "A group of diseases that result in inflammation of the skin. Also known as eczema.",
    shortDesc: "No additional effect.",
    category: "Physical",
    type: "Ground",
  },
  karatechop: {
    inherit: true,
    name: "Tenosynovitis",
    desc: "Inflammation of the fluid-filled sheath (called the synovium) that surrounds a tendon. Symptoms of tenosynovitis include pain, swelling and difficulty moving the particular joint where the inflammation occurs. When the condition causes the finger to 'stick' in a flexed position, this is called 'stenosing' tenosynovitis, commonly known as 'trigger finger'. This condition often presents with comorbid tendinitis.",
    shortDesc: "High critical hit rate.",
    category: "Physical",
    type: "Ground",
  },
  bide: {
    inherit: true,
    name: "Fastidious",
    desc: "Slow-growing and difficult to culture!",
    shortDesc: "Charges for two turns; returns double the damage received in those turns.",
    category: "Special",
    type: "Bug",
  },
  agility: {
    inherit: true,
    name: "Motility",
    desc: "Able to move around!",
    type: "Bug",
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
    type: "Bug",
  },
  watergun: {
    inherit: true,
    name: "Urethritis",
    basePower: 70,
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
    },
    category: "Special",
    desc: "Inflammation of the urethra. The most common symptom is painful or difficult urination. It is usually caused by infection with bacteria. The infection is often a sexually transmitted infection (STI), but some are just non-STI urinary tract infections. Urethritis can be idiopathic, but it usually is not.",
    shortDesc: "30% chance to flinch target.",
    type: "Water",
  },
  spikecannon: {
    inherit: true,
    name: "Cervicitis",
    basePower: 25,
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
    },
    onTry: function (pokemon, target) {
      if (target.gender !== 'F') {
        this.add('-immune', target, '[msg]');
        return null;
      }
    },
    desc: "Inflammation of the uterine cervix. Cervicitis in women has many features in common with urethritis in men and many cases are caused by sexually transmitted infections.",
    shortDesc: "Hits two to five times. 30% chance to flinch target. Only effects females.",
    category: "Physical",
    type: "Water",
  },
  smokescreen: {
    inherit: true,
    name: "Conjunctivitis",
    desc: "Also known as pink eye, is inflammation of the outermost layer of the white part of the eye and the inner surface of the eyelid.",
    shortDesc: "Lowers the target's accuracy by one stage.",
    type: "Electric",
  },
  doublekick: {
    inherit: true,
    name: "Orchitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
    },
    onTry: function (pokemon, target) {
      if (target.gender !== 'M') {
        this.add('-immune', target, '[msg]');
        return null;
      }
    },
    desc: "Inflammation of the testes. It can also involve swelling, heavy pains and frequent infection, and is more rarely known as didymitis.",
    shortDesc: "Hits twice. 30% chance to flinch target. Only effects males.",
    category: "Physical",
    type: "Grass",
  },
  rollingkick: {
    inherit: true,
    name: "Proctitis",
    secondary: {
      chance: 30,
      volatileStatus: 'flinch',
    },
    desc: "Proctitis is an inflammation of the anus and the lining of the rectum, affecting only the last 6 inches of the rectum.",
    shortDesc: "30% chance to flinch target.",
    category: "Physical",
    type: "Rock",
  },
  lovelykiss: {
    inherit: true,
    name: "STI",
    status: 'brn',
    desc: "Infections that are commonly spread by sex, especially vaginal intercourse, anal sex and oral sex.",
    shortDesc: "Burns target.",
    type: "Grass",
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
    desc: "Urinary Tract Infection",
    shortDesc: "If target is male, 70% accuracy and 100 base power. If target is female, 100% accuracy and 70 base power.",
    category: "Special",
    type: "Water",
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
    category: "Special",
    type: "Poison",
  },
  wrap: {
    inherit: true,
    name: "Syphilis",
    secondary: {
      chance: 30,
      status: 'par',
    },
    pp: 5,
    desc: "The signs and symptoms of syphilis vary depending in which of the four stages it presents (primary, secondary, latent, and tertiary). The primary stage classically presents with a single chancre (a firm, painless, non-itchy skin ulceration) but there may be multiple sores. In secondary syphilis a diffuse rash which frequently involves the palms of the hands and soles of the feet occurs. There may also be sores in the mouth or vagina. In latent syphilis there are little to no symptoms which can last for years.[2] In tertiary syphilis there are gummas (soft non-cancerous growths), neurological, or heart symptoms.[3] Syphilis has been known as 'the great imitator' as it may cause symptoms similar to many other diseases.",
    category: "Physical",
    type: "Grass",
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
    category: "Special",
    shortDesc: "Bug",
  },
  eggbomb: {
    inherit: true,
    name: "Congenital Defect",
    desc: "Can lead to congenital defects, stillbirth, and/or fetal anomologies.",
    shortDesc: "No additional effect.",
    category: "Special",
    type: "Dark",
  },
  whirlwind: {
    inherit: true,
    name: "Endoflagellate",
    desc: "Endoflagella are the special flagella of spirochetes that spiral tightly around the cell instead of protruding into the environment. Together, these endoflagella form an axial filament that wraps around the cell and rotates, enabling it to “corkscrew” through its medium.",
    shortDesc: "Forces a switch to a random pathogen. Priority -1.",
    type: "Bug",
  },
  waterfall: {
    inherit: true,
    name: "PMC",
    desc: "Pseudomembrane Colitis is colitis (inflammation of the large intestine) resulting from infection with Clostridium difficile.",
    shortDesc: "No additional effect.",
    category: "Physical",
    type: "Rock",
  },
  mimic: {
    inherit: true,
    desc: "Pathogen is known to mimic other pathogens.",
    type: "Bug",
  },
  nightshade: {
    inherit: true,
    basePower: 70,
    name: "Gastritis",
    desc: "Inflammation of the lining of the stomach.",
    category: "Physical",
    type: "Rock",
  },
  perishsong: {
    inherit: true,
    name: "Oncogenic",
    desc: "Pathogen is known promote or cause tumors/cancer.",
    type: "Dark",
  },
  leechseed: {
    inherit: true,
    name: "Ulcerate",
    desc: "A discontinuity or break in a bodily membrane that impedes the organ of which that membrane is a part from continuing its normal functions.",
    type: "Rock",
  },
  sunnyday: {
    inherit: true,
    name: "Pyrexia",
    desc: "Having a temperature above the normal range due to an increase in the body's temperature set-point. There is not a single agreed-upon upper limit for normal temperature with sources using values between 37.5 and 38.3 °C (99.5 and 100.9 °F).",
  },
  focusenergy: {
    inherit: true,
    name: "Lymphadenopathy",
    desc: "A disease of the lymph nodes, in which they are abnormal in size, number, or consistency.",
    type: "Fire",
  },
  growth: {
    inherit: true,
    name: "Hepatomegaly",
    desc: "Enlarged liver.",
    type: "Fire",
  },
  spite: {
    inherit: true,
    name: "Splenomegaly",
    desc: "Enlarged spleen.",
    type: "Fire",
  },
  kinesis: {
    inherit: true,
    name: "Encephalitis",
    desc: "A sudden onset inflammation of the brain. Encephalitis with meningitis is known as meningoencephalitis. Symptoms include headache, fever, confusion, drowsiness, and fatigue. Further symptoms include seizures or convulsions, tremors, hallucinations, stroke, and memory problems.",
    type: "Electric",
  },
  zapcannon: {
    inherit: true,
    name: "Myelitis",
    desc: "Infection or the inflammation of the white matter or gray matter of the spinal cord which is a part of central nervous system that acts as a bridge between the brain and the rest of the body.",
    type: "Electric",
  },
  confusion: {
    inherit: true,
    name: "Ataxia",
    desc: "A neurological sign consisting of lack of voluntary coordination of muscle movements that includes gait abnormality. Ataxia is a non-specific clinical manifestation implying dysfunction of the parts of the nervous system that coordinate movement, such as the cerebellum.",
    type: "Psychic",
  },
  flamewheel: {
    inherit: true,
    basePower: 100,
    name: "HUS",
    desc: "A disease characterized by hemolytic anemia (anemia caused by destruction of red blood cells), acute kidney failure (uremia), and a low platelet count (thrombocytopenia). It predominantly, but not exclusively, affects children. Most cases are preceded by an episode of infectious, sometimes bloody, diarrhea acquired as a foodborne illness or from a contaminated water supply caused by E. coli O157:H7, other non-o157:H7 E. coli serotypes, Shigella, and Campylobacter.",
    type: "Fire",
  },
  earthquake: {
    inherit: true,
    name: "Enteritis",
    desc: " inflammation of the small intestine. It is most commonly caused by food or drink contaminated with pathogenic microbes.[1] Symptoms include abdominal pain, cramping, diarrhea, dehydration, and fever.",
    type: "Ground",
  },
  substitute: {
    inherit: true,
    name: "Granuloma",
    desc: "is an inflammation found in many diseases. It is a collection of immune cells known as histiocytes. Granulomas form when the immune system attempts to wall off substances it perceives as foreign but is unable to eliminate. Such substances include infectious organisms including bacteria and fungi, as well as other materials such as keratin and suture fragments.",
    type: "Ground",
  },
  harden: {
    inherit: true,
    name: "Van-A",
    desc: "Six different types of vancomycin resistance are shown by enterococcus: Van-A, Van-B, Van-C, Van-D, Van-E and Van-G. The significance is that Van-A VRE is resistant to both vancomycin and teicoplanin, Van-B VRE is resistant to vancomycin but susceptible to teicoplanin, and Van-C is only partly resistant to vancomycin, and susceptible to teicoplanin. The mechanism of resistance to vancomycin found in enterococcus involves the alteration of the peptidoglycan synthesis pathway. The D-alanyl-D-lactate variation results in the loss of one hydrogen-bonding interaction (four, as opposed to five for D-alanyl-D-alanine) being possible between vancomycin and the peptide. The D-alanyl-D-serine variation causes a six-fold loss of affinity between vancomycin and the peptide, likely due to steric hindrance.",
    shortDesc: "Raises the user's Defense by 2.",
    boosts: {
      def: 2,
    },
    type: "Bug",
  },
  ancientpower: {
    inherit: true,
    name: "Bilary Tract Infection",
    desc: "Biliary tract infections are characterized by acute cholecystitis - an acute inflammation of the gall bladder wall, and cholangitis - an inflammation of the bile ducts. Infection is generally secondary to predisposing factors.",
    type: "Rock",
  },
  sandattack: {
    inherit: true,
    name: "Ophthalmologic Shit",
    desc: "Causes some kind of ophthalmologic condition.",
    type: "Electric",
  },
  bonemerang: {
    inherit: true,
    name: "Arthritis",
    desc: "Septic arthritis, also known as infectious arthritis or joint infection, is the purulent invasion of a joint by an infectious agent which produces arthritis. People with artificial joints are more at risk than the general population but have slightly different symptoms, are infected with different organisms and require different treatment. Septic arthritis is considered a medical emergency. If untreated, it may destroy the joint in a period of days. The infection may also spread to other parts of the body.",
    type: "Ground",
  },
  swift: {
    inherit: true,
    name: "Epiglottitis",
    desc: "Inflammation of the epiglottis. Symptoms are usually rapid in onset and include trouble swallowing which can result in drooling, changes to the voice, fever, and an increased breathing rate. As the epiglottis is in the upper airway, swelling can interfere with breathing.[1] People may lean forward in an effort to open the airway. As the condition worsens stridor and bluish skin may occur.",
    type: "Flying",
  },
  sludgebomb: {
    inherit: true,
    name: "Typhoid Fever",
    desc: "Often there is a gradual onset of a high fever over several days. Weakness, abdominal pain, constipation, and headaches also commonly occur. Diarrhea is uncommon and vomiting is not usually severe.[4] Some people develop a skin rash with rose colored spots. In severe cases there may be confusion.[4] Without treatment symptoms may last weeks or months. Other people may carry the bacterium without being affected; however, they are still able to spread the disease to others. Typhoid fever is a type of enteric fever along with paratyphoid fever.",
    type: "Rock",
  },
  poisongas: {
    inherit: true,
    accuracy: 90,
    name: "Shiga toxin",
    desc: "Shiga toxins act to inhibit protein synthesis within target cells by a mechanism similar to that of ricin. After entering a cell via a macropinosome, the protein cleaves a specific adenine nucleobase from the 28S RNA of the 60S subunit of the ribosome, thereby halting protein synthesis.",
    shortDesc: "90% chance to poison target.",
    type: "Poison",
  },
  thunderwave: {
    inherit: true,
    name: "GBS",
    desc: "Guillain–Barré syndrome (GBS) is a rapid-onset muscle weakness caused by the immune system damaging the peripheral nervous system. The initial symptoms are typically changes in sensation or pain along with muscle weakness, beginning in the feet and hands. This often spreads to the arms and upper body with both sides being involved. The symptoms develop over hours to a few weeks. During the acute phase, the disorder can be life-threatening with about 15% developing weakness of the breathing muscles requiring mechanical ventilation. Some are affected by changes in the function of the autonomic nervous system, which can lead to dangerous abnormalities in heart rate and blood pressure.",
    type: "Electric",
  },
  triattack: {
    inherit: true,
    name: "Angiomatosis",
    desc: "Angiomatosis is a non-neoplastic condition presenting with little knots of capillaries in various organs. It consists of many angiomas. It is associated with Von Hippel-Lindau Disease and is a rare genetic multi system disorder characterized by the abnormal growth of tumours in the body. Symptoms may include headaches, problems with balance and walking, dizziness, weakness of the limbs, vision problems and high blood pressure. Prognosis depends on the size and location of the tumour, untreated angiomatosis may lead to blindness and/ or permanent brain damage. Death may occur, with complications in the kidney or brain.",
    type: "Fire",
  },

// DRUGS
  headbutt: {
    inherit: true,
    basePower: 80,
    name: "3rd Gen Ceph",
    desc: "β-lactam. Relatively resisitent to most (but not all!) β-lactamases. Third generation has very broad gram-negative coverage, efficiently cross BBB. Some agents include excellent coverage of Pseudomonas (e.g. ceftazimine), but also exhibit reduced activity against gram-positives.",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  vinewhip: {
    inherit: true,
    basePower: 80,
    name: "Natural Penicillin",
    desc: "Narrow spectrum β-lactams. Includes Penicillin G and Penicillin V. Can trigger hypersensitivity reactions (rashes, urticaria, angioedema, fever, arthralgia, anaphylaxis).",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && (target.baseTemplate.weaknesses.includes(move.name) || target.baseTemplate.weaknesses.includes("Penicillin"))) {
        move.type = "Normal";
      }
    },
  },
  razorleaf: {
    inherit: true,
    basePower: 80,
    name: "Penicinillase-Resistant Penicillin",
    desc: "Very narrow spectrum β-lactams. Includes Nafcillin, Oxacillin, and Dicloxacillin. Adverse effects: Allergic reactions; interstitial nephritis",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && (target.baseTemplate.weaknesses.includes(move.name) || target.baseTemplate.weaknesses.includes("Penicillin"))) {
        move.type = "Normal";
      }
    },
  },
  machpunch: {
    inherit: true,
    basePower: 80,
    name: "Aminopenicillin",
    desc: "Broad spectrum β-lactams. Includes Ampicillin and Amoxicillin. Often paired with beta-lactamase inhibitors like clavulanic acid or sulbactam. Adverse effects: Hypersensitivity reactions (rashes, urticaria, angioedema, fever, arthralgia, anaphylaxis); GIT disturbances; rarely colitis.",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && (target.baseTemplate.weaknesses.includes(move.name) || target.baseTemplate.weaknesses.includes("Penicillin"))) {
        move.type = "Normal";
      }
    },
  },
  hornattack: {
    inherit: true,
    basePower: 80,
    name: "Carboxipenicillin",
    desc: "Extended spectrum β-lactams. Includes Ticarcillin and Carbenicillin. Adverse effects: Allergic reactions ranging from rash to anaphylaxis; Can interfere with platlet aggreation leading to bleeding.",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && (target.baseTemplate.weaknesses.includes(move.name) || target.baseTemplate.weaknesses.includes("Penicillin"))) {
        move.type = "Normal";
      }
    },
  },
  megakick: {
    inherit: true,
    basePower: 80,
    name: "Ureidopenicillin",
    desc: "Extended spectrum β-lactams. Includes Piperacillin, Azlocillin, and Mezlocillin. Adverse effects: Hypersensitivity reactions (rashes, urticaria, angioedema, fever, arthralgia, anaphylaxis); GIT disturbances, pseudomembranous colitis.",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && (target.baseTemplate.weaknesses.includes(move.name) || target.baseTemplate.weaknesses.includes("Penicillin"))) {
        move.type = "Normal";
      }
    },
  },
  payday: {
    inherit: true,
    basePower: 80,
    name: "Carbapenem",
    desc: "β-lactam. Includes Meropenem, Etrapenem, Doripenem, and Imipenem + Cylastatine. Adverse effects: GIT disturbances, rashes, injection site reactions.",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  pound: {
    inherit: true,
    basePower: 80,
    name: "Monobactam",
    desc: "β-lactam. Includes Azetreonam.",
    type: "???",
    category: "Physical",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  sacredfire: {
    inherit: true,
    basePower: 120,
    name: "Glycopeptide",
    desc: "Binds with high affinity to the D-alanyl-D-alanine portion of cell wall precursors and prevents polymerization of peptidoglycans. Includes Vancomycin, Bacitracin, Teicoplanin, and Polymyxin B. Adverse effects: Red man syndrome (flushing and pruritis when infused too rapidly due to histamine release); ototoxicity and nephrotoxicity.",
    shortDesc: "Little effect against gram-negatives. 10% chance to burn self.",
    type: "???",
    secondary: {
      chance: 10,
      self: {
        status: 'brn',
      },
    },
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
      if (target.baseTemplate.classification && !target.baseTemplate.classification.includes("Gram+")) {
        move.basePower = 20;
      }
    },
  },
  cometpunch : {
    inherit: true,
    basePower: 80,
    name: "Aminoglycoside",
    desc: "30s inhibitor (energy dependent, sometimes irreversibly binds). Includes Gentamycin, Neomycin, Streptomycin, Amikacin, Paramomycin, and Tobramycin. Adverse effects: Dose-related ototoxicity and nephrotoxicity. GIT disturbances, rash, blood disorders can occur; ↑ototoxicity with loop diuretics; ↑ effect of neuromuscular blockers. High risk for adverse effects if > 5 days of therapy.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  thunderpunch: {
    inherit: true,
    basePower: 80,
    name: "Tetracycline",
    desc: "30s inhibitor at the A site to prevent polypeptide elongation (reversibly binds). Includes Doxycycline, Tetracylin, Demeclocylin, Tigecyclin, Minocycline. Adverse effects: Staining of the teeth, GIT disturbances, anorexia, flushing, tinnitus. Rare: hepatotoxicity pancreatitis, hypersensitivity reactions. Minocycline (has broader spectrum), demeclocycline.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  takedown: {
    inherit: true,
    basePower: 80,
    name: "Macrolide",
    desc: "50s inhibitor (reversibly binds). Includes Erythromycin, Azithromycin, and Clarithromycin. Adverse effects: GIT disturbances. Less frequent: allergic reactions, cholestatic jaundice.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  megapunch: {
    inherit: true,
    basePower: 80,
    name: "Lincosamide",
    desc: "50s inhibitor. Includes Clindamycin, Lincomycin, and Pirlimycin. Adverse effects: GIT disturbances. Pseudomembranous colitis. C. diff infection. Less frequent: allergic reactions, cholestatic jaundice.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  twister: {
    inherit: true,
    basePower: 80,
    name: "Fluoroquinolone",
    desc: "Inhibits DNA gyrase and topoisomerase. Includes Ciprofloxacin, Norfloxacin, Levofloxacin, Ofloxacin, Sparfloxacin, Moxifloxacin, Gemifloxacin, Enofloxacin. Adverse effects: GIT upsets, headache, dizziness, rashes. Rare: tendon damage, CNS effects (seizures, insomnia) due to competition with GABA binding to its receptors.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  icepunch: {
    inherit: true,
    basePower: 80,
    name: "TMP-SMX",
    desc: "Sulfamethoxazole competitively inhibits the enzyme dihydropteroate synthetase. Trimethoprim inhibits dihydrofolate reductase and thus the conversion of folate to tetrahydrofolate. Adverse effects: Trimethoprim can cause megaloblastic anemia; Sulfamethoxazole can cause hypersensitivity reactions and hemolytic anemia in patients with G6PD deficiency. It also potentiates phenytoin, warfarin, and oral hypoglycemics.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  metronome: {
    inherit: true,
    basePower: 80,
    name: "Metronidazole",
    desc: "The trophozoite generates, from the drug, free radicals that damage the trophozoite’s DNA. Adverse effects: GIT disturbances; anorexia. Occasionally dizziness, ataxia, myalgia, hepatitis, blood dyscrasias, Can cause disulfiram reactions after alcohol.",
    type: "???",
    category: "Special",
    onHit: false,
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  psybeam: {
    inherit: true,
    basePower: 80,
    name: "Rifampin",
    desc: "Inhibits bacterial but not human DNA-dependent RNA polymerase leading to reduced RNA synthesis in the bacterial cell. Adverse effects: GIT disturbances, hepatitis, rash, harmless orange tint to saliva, sweat tears. If treatment is intermittent patients can develop influenza-like and respiratory symptoms, shock, renal problems and thrombocytopenic purpura.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  rocksmash: {
    inherit: true,
    basePower: 80,
    name: "Cocci Crush",
    desc: "Double damage against cocci.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.classification && (target.baseTemplate.classification.includes("Cocci") || target.baseTemplate.classification.includes("Diplococci"))) {
        move.type = "Normal";
      }
    },
  },
  stomp: {
    inherit: true,
    basePower: 80,
    name: "Bacillus Buster",
    desc: "Double damage against bacilli.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.classification && target.baseTemplate.classification.includes("Bacillus")) {
        move.type = "Normal";
      }
    },
  },
  jumpkick: {
    inherit: true,
    basePower: 80,
    name: "Spiro Smash",
    desc: "Double damage against spirochetes.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.classification && target.baseTemplate.classification.includes("Spirochete")) {
        move.type = "Normal";
      }
    },
  },
  vicegrip: {
    inherit: true,
    basePower: 80,
    name: "Gram Negator",
    desc: "Double damage against gram negative bacteria.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.classification && target.baseTemplate.classification.includes("Gram-")) {
        move.type = "Normal";
      }
    },
  },
  slam: {
    inherit: true,
    basePower: 80,
    name: "Gram Possession",
    desc: "Double damage against gram positive bacteria.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.classification && target.baseTemplate.classification.includes("Gram+")) {
        move.type = "Normal";
      }
    },
  },
  thrash: {
    inherit: true,
    name: "RIPE",
    desc: "Rifampin + Isoniazid + Pyrazinamide ± Ethambutol or Streptomycin.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  icebeam: {
    inherit: true,
    name: "Anti-malarial",
    desc: "Includes Quinine and related agents, Chloroquine, Amodiaquine, Pyrimethamine, Proguanil, Sulfonamides, Mefloquine, Atovaquone, Primaquine, Artemisinin and derivatives, Halofantrine, Doxycycline, and Clindamycin.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.weaknesses && target.baseTemplate.weaknesses.includes(move.name)) {
        move.type = "Normal";
      }
    },
  },
  megadrain: {
    inherit: true,
    name: "hivprophylaxis",
    desc: "Super effective if pathogen is one of the HIV opportunitistic infections.",
    type: "???",
    category: "Special",
    onModifyMove: function (move, source, target) {
      if (target.baseTemplate.classification && target.baseTemplate.classification.includes("HIV")) {
        move.type = "Normal";
      }
    },
  },

};
