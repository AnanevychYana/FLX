var a = prompt("Enter 'a' number:");
var b = prompt("Enter 'b' number:");
var c = prompt("Enter 'c' number:");
var validInput = true;
if (isNaN(a) || a === "" || a === "Infinity") {
	validInput = false;
	alert("a: Invalid input data");
}
if (isNaN(b) || b === "" || b === "Infinity") {
	validInput = false;
	alert("b: Invalid input data");
}
if (isNaN(c) || c === "" || c === "Infinity") {
	validInput = false;
	alert("c: Invalid input data");
}

if (validInput) {
	var D = Math.pow(b, 2) - 4 * a * c;
	if (D < 0 || a === "0") {
		alert("no solution");
	} else if (D === 0) {
		var x = -b / (2 * a);
		alert("x = " + x);
	} else {
		var x1 = (-b + Math.sqrt(D)) / (2 * a);
		var x2 = (-b - Math.sqrt(D)) / (2 * a);
		alert("x1 = " + x1 + "\nx2 = " + x2);
	}
}

