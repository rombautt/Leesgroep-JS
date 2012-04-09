document.writeln("priemgetallen V1");

var getal = prompt("Geef een getal: ","");

var isPriemGetal = function(getal) {
	if(isNaN(getal)) {
		document.writeln(getal + " is geen getal!");
		return false;
	}
	
	if(getal < 0 ) {
		document.writeln(getal + " is negatief!");
		return false;
	}
		
	if (getal===1 || getal ===2) {
		return true;
	}
	
	
	var helft = parseInt(getal / 2);
	
	for (var i=2; i<=helft; i++) {
		if (getal % i === 0) {
			document.writeln(getal + " is deelbaar door " + i);
			return false;
		}
	}
	
	
	
	return true;
};
var test = isPriemGetal(getal) ? "inderdaad een" : "GEEN"
document.writeln(getal + " is " + test + " priemgetal ");