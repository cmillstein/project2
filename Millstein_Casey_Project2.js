// alert("This is my second project!");
// Casey Millstein
// SDI 1404
// Project 2


/* 
Cooking
Will you be cooking banana bread tonight? (y/n)
If Y: output yes, return true
else: output no; return false

confirm: do you know what ingredients you need (ok = yes, cancel = no)
run booleanFunction()

How many servings do I need
run numberFunction()
*/




// My Variables
var cookingQuestion, ingredientsConfirm;


// My Functions
function procedureFunction(cookingQuestion) {
	if (cookingQuestion == 'yes') {
		console.log('Yes, time to do it!');
		return true;
	} else {
		console.log('Oh no!');
		return false;
	}
}

function booleanFunction(confirm, arg = "1") {
	var ingredientsNeeded = ["eggs", "milk", "banana", "flour", "cinnamon", "sugar"];
	var ingredientsHave = ["eggs", "flour", "sugar"];
	var i = 0,o = 0, needSomething = false;
	
	while (i <= ingredientsNeeded) {
		while (o <= ingredientsHave) {
			if (ingredientsHave[o] == ingredientsNeed[i]) {
				console.log('I have '+ ingredientsHave[o] );
				break;
			}
			o++;
		}
		console.log('I need '+ ingredientsNeed[i] );
		needSomething = true;
		i++;
	}
	
	if (needSomething)
		return false;
	else
		return true;
}

function numberFunction(servings) {
	// Per serving ingredients
	var eggsNeeded = 2, milkNeeded = 1, bananaNeeded = 1, flourNeeded = 0.5, cinnamonNeeded = 0.25, sugarNeeded = 0.5;
	// total ingredients
	var eggs, milk, banana, flour, cinnamon, sugar;
	for (var i = 0; i <= servings; i++) {
		eggs = eggsNeeded * servings;
		milk = milkNeeded * servings;
		banana = bananaNeeded * servings;
		flour = flourNeeded * servings;
		cinnamon = cinnamonNeeded * servings;
/* 		sug */
	}
	 
}

function stringFunction(servings, partSentence) {
	var strToReturn;
	strToReturn = servings +' '+ partSentence;
	return strToReturn;
}


// My Outputs

console.log('Banana Bread time!');
cookingQuestion = window.prompt = ('Will you be cooking banana bread tonight?', 'yes/no');

var timeToCook = procedureFunction();

if (timeToCook) {
	ingredientsConfirm = window.confirm('Do you have the ingredient needed');
	
	if (ingredientsConfirm) {
		var checkIng = booleanFunction(ingredientsConfirm, arg);
		if (!checkIng)
			console.log('Go to the store!');
		else {
			var numServings = numberFunction(6); //6 servings
			var doneCooking = stringFunction(numServings.toString(), 'I have made');
			console.log(doneCooking);
		}
	} else {
		console.log('Well, check the fridge, Jack!');
	}
	
} else {
	console.log('Guess it\'s not time, maybe tomorrow');
}









// My Conditionals
