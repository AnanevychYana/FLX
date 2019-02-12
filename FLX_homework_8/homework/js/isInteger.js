function isInteger(a) {
	a = a.toString();
	for (let i = 0; i < a.length; i++) {
		if (a[i] === '.') {
			return (false);
		}
	}
	return (true);
}

isInteger(2.4);