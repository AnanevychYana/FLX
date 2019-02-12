function reverseNumber (a) {
	a = a.toString();
	let isNegativeNumber = false;
	if (a[0]=== "-") {
		isNegativeNumber = true;
	}
	let reversedString = "";
	for (let i = a.length - 1; i >= 0; i--) {
		reversedString += a[i];
	}
	if (isNegativeNumber) {
		reversedString = "-" + reversedString;
	}
	return parseInt(reversedString);
}

reverseNumber(1234);