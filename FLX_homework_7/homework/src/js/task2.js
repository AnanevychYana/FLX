let isConfirmed = confirm("Do you want to play a game?");
if (!isConfirmed) {
	alert("You did not become a millionaire, but can.");
} else {
	let totalPrize = 0;
	let gameNumber = 0;
	while (isConfirmed) {
		console.log("something");
		let maxNumber = 5 * Math.pow(2, gameNumber);
		let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
		console.log(randomNumber);
		let firstPrize = 10 * Math.pow(3, gameNumber);
		let secondPrize = 5 * Math.pow(3, gameNumber);
		let thirdPrize = 2 * Math.pow(3, gameNumber);
		let isWinner = false;
		for(let attempt = 1; attempt < 4; attempt++){
			let prize = 0;
			if (attempt === 1) {
				prize = firstPrize;
			} else if (attempt === 2) {
				prize = secondPrize;
			} else {
				prize = thirdPrize;
			}
			let infoText = "Enter a number from 0 to " + maxNumber + "\n" +
							"Attemps left: " + (4 - attempt) + "\n" +
							"Total prize: " + totalPrize + "\n" + 
							"Possible prize on current attempt: " + prize;
			let userNumber = prompt(infoText, 0);
			userNumber = parseInt(userNumber, 10);
			if (isNaN) {
					isConfirmed = false;
					break;
				}
			if (randomNumber === userNumber) {
				totalPrize += prize;
				isWinner = true;
				gameNumber += 1;
				isConfirmed = confirm("Congratulation! Your prize is: " + prize + "$. Do you want to continue?");
				break;
			}	
		}
		if (!isWinner || !isConfirmed) {
			alert("Thank you for a game. Your prize is: " + totalPrize + "$");
			totalPrize = 0;
			gameNumber = 0;
			isConfirmed = confirm("Do you want to play again?");
		}
	}
}