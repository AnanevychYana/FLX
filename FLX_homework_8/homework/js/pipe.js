function pipe(x, ...functions) {
	for (let i = 0; i < functions.length; i++) {
		x = functions[i](x);
	}
	return x;
}
