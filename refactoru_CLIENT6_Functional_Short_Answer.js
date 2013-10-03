$(document).ready(function(){


/** Using Ternary Operator */

var pluralize = function(word, number) {
	return output = number===1 ? word : word + "s"	
}
console.log(pluralize("radio",345345));

/** Victims (functional) */

var getVictimInfo = function() {
	var victim = {};
	victim.names = prompt("Please enter your name:");
	victim.phone = prompt("Please enter your phone number:");
	victim.street = prompt("Please enter your street address:");
 	return victim;
};
var alertVictimInfo = function(victim){
	return 'Thank you! Victim entered: \n' + victim.names + ", " + victim.phone + ", " + victim.street;
}

alert(alertVictimInfo(getVictimInfo()));


/** Remove Falsey Values (with side effects)*/

sampleArray = [0, "job", null, false, 2, 3, "of", 5, "win", 7, "", NaN, false, null, 8, undefined]

var findFalseyVals = function(array){
	for (var i = array.length-1; i>=0; i--) {
		if (!array[i]){
			array.splice(i,1);
		}
	}
	return array;
}

console.log("finalarray: ", findFalseyVals(sampleArray));

/** Remove Falsey Values (pure functions)*/

var findFalseyValues = function(array){
	var falseFreeArray = [];
	for (var i = 0; i < array.length; i++) {
		if(array[i]){
			falseFreeArray.push(array[i]);
		}
	}
	return falseFreeArray;
	console.log(falseFreeArray);
}

console.log(findFalseyValues(sampleArray));

});





