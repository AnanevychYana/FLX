let login = prompt("Please, enter your login!", "Login");
if (login === "" || login === null) {
	alert("Canceled.");
} else if (login.length < 4) {
	alert("I don't know any users having name length less than 4 symbols");
} else if (login === "User" || login === "Admin") {
	let password = prompt("Please, enter a password", "password");
	if (password === "" || password === null) {
		alert("Canceled.");
	} else if ((login === "User" && password === "UserPass")
		|| (login === "Admin" && password === "RootPass")) {
		let hours = new Date().getHours();
		if (hours < 20) {
			alert("Good day, dear " + login + "!");	
		} else {
			alert("Good evening, dear " + login + "!");	
		}
	} else {
		alert("Wrong password");
	}
} else {
	alert("I don’t know you");
}

