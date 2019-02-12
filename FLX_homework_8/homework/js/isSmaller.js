function isBigger (a, b) {
	return (a > b);
}

function isSmaller(a, b) {
	return (a === b ? false : !isBigger(a, b)); 
}

isSmaller(2, 3);