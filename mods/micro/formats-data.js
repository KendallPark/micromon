'use strict';

exports.BattleFormatsData = {
	charmander: {
		nickname: "Staph. aureous",
		randomBattleMoves: ["abscess", "pneumonia", "osteomyelitis", "endocarditis", "infectwound", "foodpoison", "toxicshock", "biofilm"],
		essentialMove: "capsule",
		category: "micro",
	},
	// charmeleon: {
	// 	nickname: "MRSA",
	// 	randomBattleMoves: ["abscess", "pneumonia", "osteomyelitis", "endocarditis", "infectwound", "foodpoison", "toxicshock", "biofilm"],
	// 	essentialMove: "capsule",
	// 	category: "micro",
	// },
	// charizard: {
	// 	nickname: "VRSA",
	// 	randomBattleMoves: ["abscess", "pneumonia", "osteomyelitis", "endocarditis", "infectwound", "foodpoison", "toxicshock", "biofilm"],
	// 	essentialMove: "capsule",
	// 	category: "micro",
	// 	classification: ["Gram+", "Cocci", "Coagulase+", "Catalase+"],
	// 	weaknesses: [],
	// },

	// GRAM POS
	lickitung: {
		nickname: "Strep. pneumoniae",
		randomBattleMoves: ["otitis media", "meningitis", "capsule", "strain"],
		essentialMove: "pneumonia",
		category: "micro",
	},
	magmar: {
		nickname: "Strep. pyogenes",
		randomBattleMoves: ["pharyngitis", "impetigo", "cellulitis", "rheumaticfever", "glomerulonephritis", "sepsis", "infectwound", "toxicshock", "scarletfever", "eatflesh", "pyrogenicexotoxin", "hemolysis"],
		essentialMove: "M Protein",
		category: "micro",
	},
	onix: {
		nickname: "Clos. difficile",
		randomBattleMoves: ["diarrhea", "toxicmegacolon", "endospore", "opportunity", "toxinaandb"],
		essentialMove: "pmc",
		category: "micro",
	},
	steelix: {
		nickname: "Entero. faecalis",
		randomBattleMoves: ["uti", "endocarditis", "van-a", "bilarytractinfection"],
		category: "micro",
	},

	// GRAM NEG
	jynx: {
		nickname: "Neiss. gonorrhoeae",
		randomBattleMoves: ["pid", "dermatitis", "tenosynovitis", "fastidious", "motility", "typeivpili", "urethritis", "cervicitis", "pharyngitis", "conjunctivitis", "orchitis", "proctitis", "arthritis"],
		essentialMove: "sti",
		category: "micro",
	},
	venusaur: {
		nickname: "Pseudo. aeruginosa",
		randomBattleMoves: ["uti", "pneumonia", "infectwound", "exotoxina", "biofilm", "opportunity", "motility"],
		category: "micro",
	},
	ekans: {
		nickname: "Trep. pallidum",
		randomBattleMoves: ["mimic", "congenitaldefect", "endoflagellate"],
		essentialMove: "syphilis",
		category: "micro",
	},
	ninetales: {
		nickname: "Helico. pylori",
		randomBattleMoves: ["gastritis", "ulcerate", "oncogenic", "motility"],
		category: "micro",
	},
	persian: {
		nickname: "Bartonella henselae",
		randomBattleMoves: ["pyrexia", "lymphadenopathy", "hepatomegaly", "splenomegaly", "conjunctivitis", "encephalitis", "myelitis", "ataxia", "ophthalmologicshit"],
		essentialMove: "angiomatosis",
		category: "micro",
	},
	dugtrio: {
		nickname: "Escher. coli",
		randomBattleMoves: ["uti", "pneumonia", "meningitis", "sepsis", "urethritis", "hus", "motility"],
		essentialMove: "enteritis",
		category: "micro",
	},
	weedle: {
		nickname: "Strep. agalactiae (GBS)",
		randomBattleMoves: ["meningitis", "pneumonia", "sepsis"],
		category: "micro",
	},
	raticate: {
		nickname: "H. influenza type B",
		randomBattleMoves: ["otitismedia", "pneumonia", "meningitis", "arthritis", "cellulitis"],
		essentialMove: "epiglottitis",
		category: "micro",
	},
	shellder: {
		nickname: "Salmonella typhi",
		randomBattleMoves: ["osteomyelitis", "motility", "pyrexia", "diarrhea"],
		essentialMove: "typhoidfever",
		category: "micro",
	},
	muk: {
		nickname: "Shig. dysenteriae",
		randomBattleMoves: ["diarrhea", "ulcerate", "hus"],
		essentialMove: "Shiga toxin",
		category: "micro",
	},
	pidgey: {
		nickname: "Camp. jejuni",
		randomBattleMoves: ["diarrhea", "arthritis", "motility"],
		essentialMove: "gbs",
		category: "micro",
	},


	// Other
	gloom: {
		nickname: "Chlam. trachomatis",
		randomBattleMoves: ["urethritis", "pid", "pneumonia", "conjunctivitis", "ulcerate", "lymphadenopathy", "proctitis"],
		category: "micro",
	},
	golem: {
		nickname: "Myco. tuberculosis",
		randomBattleMoves: ["fastidious", "lymphadenopathy", "pyrexia"],
		essentialMove: "granuloma",
		category: "micro",
	},
	graveler: {
		nickname: "Myco. avium complex",
		randomBattleMoves: ["fastidious", "lymphadenopathy", "pyrexia"],
		essentialMove: "granuloma",
	},

	// parasites
	meowth: {
		nickname: "Tox. gondii",
		randomBattleMoves: ["encephalitis", "congenitaldefect", "ophthalmologicshit", "abscess"],
		category: "micro",
	},
	magikarp: {
		nickname: "Crypto. parvum",
		randomBattleMoves: ["diarrhea"],
		category: "micro",
	},

	// OTHER
	miltank: {
		nickname: "Jericho",
		category: "defender",
		randomBattleMoves: ["3rdgenceph", "naturalpenicillin", "penicinillaseresistantpenicillin", "aminopenicillin", "carboxipenicillin", "ureidopenicillin", "carbapenem", "monobactam"],
		essentialMove: "glycopeptide",
	},
	chansey: {
		nickname: "Ribomatron",
		category: "defender",
		randomBattleMoves: ["aminoglycoside", "tetracycline", "lincosamide", "anti-malarial"],
		essentialMove: "macrolide",
	},
	blissey: {
		nickname: "DNA Fckr Upper",
		category: "defender",
		randomBattleMoves: ["tmp-smx", "fluoroquinolone", "metronidazole", "rifampin", "ripe"]
	},
	dragonite: {
		nickname: "Dr Duff",
		category: "defender",
		randomBattleMoves: ["coccicrush", "bacillusbuster", "spirosmash", "gramnegator", "grampossession", "hivprophylaxis"],
	},
}
