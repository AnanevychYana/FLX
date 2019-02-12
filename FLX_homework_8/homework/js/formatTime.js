function formatTime(minutes) {
	let day = Math.floor(minutes / (24 * 60));
	minutes = minutes - day * 24 * 60;
	let hour = Math.floor(minutes / 60);
	minutes = minutes - hour * 60;
	return day + " day(s) " + hour + " hour(s) " + minutes + " minute(s).";
}

formatTime(12345);