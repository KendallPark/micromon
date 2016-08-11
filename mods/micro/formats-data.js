'use strict';

exports.BattleFormatsData = {
	charmander: {
		nickname: "Staphylococcus aureous",
		randomBattleMoves: ["abscess", "pneumonia", "osteomyelitis", "endocarditis", "infectwound", "foodpoison", "toxicshock", "biofilm"],
		essentialMove: "capsule",
		category: "micro",
		types: ["Gram+", "Cocci", "Coagulase+", "Catalase+"],
		weaknesses: ["penicillin", "methicillin", "vancomycin"],
	},
	// charmeleon: {
	// 	nickname: "MRSA",
	// 	randomBattleMoves: ["abscess", "pneumonia", "osteomyelitis", "endocarditis", "infectwound", "foodpoison", "toxicshock", "biofilm"],
	// 	essentialMove: "capsule",
	// 	category: "micro",
	// 	types: ["Gram+", "Cocci", "Coagulase+", "Catalase+"],
	// 	weaknesses: ["vancomycin"],
	// },
	// charizard: {
	// 	nickname: "VRSA",
	// 	randomBattleMoves: ["abscess", "pneumonia", "osteomyelitis", "endocarditis", "infectwound", "foodpoison", "toxicshock", "biofilm"],
	// 	essentialMove: "capsule",
	// 	category: "micro",
	// 	types: ["Gram+", "Cocci", "Coagulase+", "Catalase+"],
	// 	weaknesses: [],
	// },
	lickitung: {
		nickname: "Strep pneumoniae",
		randomBattleMoves: ["otitis media", "meningitis", "capsule", "strain"],
		essentialMove: "pneumonia",
		category: "micro",
		types: ["Gram+", "Cocci", "Catalase-", "a-hemolytic"],
		weaknesses: ["cephalosporin"],
	},
	magmar: {
		nickname: "Strep pyogenes",
		randomBattleMoves: ["pharyngitis", "impetigo", "cellulitis", "rheumaticfever", "glomerulonephritis", "sepsis", "infectwound", "toxicshock", "scarletfever", "eatflesh", "pyrogenicexotoxin", "hemolysis"],
		essentialMove: "M Protein",
		category: "micro",
		types: ["Gram+", "Cocci", "Catalase-", "LancefieldA"],
		weaknesses: ["penicillin"],
	},
	onix: {
		nickname: "Clostridium difficile",
		randomBattleMoves: ["diarrhea", "megacolon", "spores", "opportunity", "toxinaandb"],
		category: "micro",
		types: ["Gram+", "Bacillus", "Anaerobic"],
		weaknesses:  ["metronidazole", "vancomycin", "fidaxomycin", "fecaltransplant"],
		resistances: ["clindamycin", "ampicillin", "amoxicillin"],
	},
	jynx: {
		nickname: "Neisseria gonorrhoeae",
		randomBattleMoves: ["pid", "dermatitis", "tenosynovitis", "fastidious", "motility", "typeivpili", "urethritis", "cervicitis", "pharyngitis", "conjunctivitis", "orchitis", "proctitis"],
		essentialMove: "std",
		category: "micro",
		types: ["Gram-", "Diplococci"],
		weaknesses: ["ceftriaxone"],
	},
	ivysaur: {
		nickname: "Pseudomonas aeruginosa",
		randomBattleMoves: ["uti", "pneumonia", "infectwound", "exotoxina", "biofilm", "opportunity"],
		category: "micro",
		types: ["Gram-", "Bacillus", "LactoseNF"]
	},
	ekans: {
		nickname: "Treponema pallidum",
		randomBattleMoves: ["cgd", "congenitaldefect", "endoflagellate"],
		essentialMove: "syphilis",
		category: "micro",
		types: ["Gram-"],
		weaknesses: ["penicillin"]
	}

}
