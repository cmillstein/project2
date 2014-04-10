// alert("This is my second project!");
// Casey Millstein
// SDI 1404
// Project 2


// My Variables
var cookingQuestion, ingredientsConfirm;


// My Functions
function procedureFunction(ans) {
    if (ans == 'yes') {
      console.log('Yes, time to do it!');
      return true;
    } else {
      console.log('Oh no!');
      return false;
    }
}

function booleanFunction(confirm, arg = "1") {
    var ingredientsNeeded = ["eggs", "milk", "banana", "flour", "cinnamon", "sugar"];
    var ingredientsHave = ["eggs", "milk", "banana", "flour", "cinnamon", "sugar"];
    var i = 0;
    var o = 0;
    var needSomething = false;
    
    outer_loop:
    while (i < ingredientsNeeded.length) {
      while (o < ingredientsHave.length) {
        if (ingredientsHave[o] == ingredientsNeeded[i]) {
          console.log('I have '+ ingredientsHave[o] );
          i++;
          continue outer_loop;
        }
        o++;
      }
      console.log('I need '+ ingredientsNeeded[i] );
      needSomething = true; 
      i++;
    }

    if (needSomething)
      return false;
    else
      return true;
}

function numberFunction(servings) {
  //cost and number needed of ingredients
  var tCost = 0; //total cost
  var ingredients = {
    eggs : {
      cost : .25,
      nNeed : 2
    },
    milk : {
      cost : .1,
      nNeed : 1
    },
    banana : {
      cost : 2,
      nNeed : 2
    },
    flour : {
      cost : .02,
      nNeed : .5
    },
    cinnamon : {
      cost : .09,
      nNeed : .25
    },
    sugar : {
      cost : .27,
      nNeed : .5
    }
  };

  for (var key in ingredients) {
    tCost = tCost + ((ingredients[key]['cost'] * ingredients[key]['nNeed'])*servings);
  }
  
  return tCost;

}

function stringFunction(servings, partSentence) {
    var strToReturn;
    strToReturn = partSentence +' '+ servings;
    return strToReturn;
}


// My Outputs

console.log('Banana Bread time!');
cookingQuestion = window.prompt('Will you be cooking banana bread tonight?', 'yes/no');

var timeToCook = procedureFunction(cookingQuestion);

if (timeToCook) {
    ingredientsConfirm = window.confirm('Do you have the ingredients needed?');

    if (ingredientsConfirm) {
      var checkIng = booleanFunction(ingredientsConfirm, '1');
      if (!checkIng)
        console.log('Go to the store!');
      else {
        var numServings = numberFunction(7); //6 servings
        var doneCooking = stringFunction(parseFloat(numServings), 'It cost me a total of');
        console.log(doneCooking);
      }
    } else {
      console.log('Well, check the fridge, Jack!');
    }
} else {
    console.log('Guess it\'s not time, maybe tomorrow');
}
