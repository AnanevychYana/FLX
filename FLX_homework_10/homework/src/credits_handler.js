function userCard (index) {
	let obj = {
		balance: 100,
		transactionLimit: 100,
		historyLogs: [],
		key: index,
		getCardOptions: function () {
			return {
				balance: this.balance,
				transactionLimit: this.transactionLimit,
				historyLogs: this.historyLogs,
				key: this.key
			};
		},
		putCredits: function (creditsAmount) {
			this.balance += creditsAmount;
			this.saveOperation(creditsAmount, 'Received credits');
		},
		takeCredits: function (creditsAmount) {
			if (creditsAmount > this.balance) {
				console.error('Amount of credits is bigger than card balance.');
			} else if (creditsAmount > this.transactionLimit) {
				console.error('Amount of credits is bigger than transaction limit.');
			} else {
				this.balance -= creditsAmount;
				this.saveOperation(creditsAmount, 'Withdrawal of credits');
			}
		},
		setTransactionLimit: function (newTransactionLimit) {
			this.transactionLimit = newTransactionLimit;
			this.saveOperation(newTransactionLimit, 'Transaction limit change');
		},
		transferCredits: function (creditsAmount, receiverCard) {
			let taxCoeficient = 1.005;
			let fullAmount = creditsAmount * taxCoeficient;
			if (fullAmount > this.balance) {
				console.error('Amount of credits is bigger than card balance.');
			} else if (fullAmount > this.transactionLimit) {
				console.error('Amount of credits is bigger than transaction limit.');
			} else {
				this.balance -= fullAmount;
				receiverCard.putCredits(creditsAmount);
			}
		},
		saveOperation: function (creditsAmount, operationType) {
			let currentDate = new Date();
			this.historyLogs.push({
				operationType: operationType,
				credits: creditsAmount,
				operationTime: currentDate.toLocaleString('en-GB')
			});
		}
	}
	return obj;
}

class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
	}

	addCard() {
		let maxLength = 3; 
		if (this.cards.length === maxLength) {
			console.error('Too many cards for one user');
		} else {
			let newCard = userCard(this.cards.length + 1);
			this.cards.push(newCard);
		}
	}

	getCardByKey(key) {
		let minKey = 1;
		let maxKey = 3;
		if (key < minKey || key > maxKey || key > this.cards.length) {
			console.error('Invalid key');
		}
		return this.cards[key - 1];
	}
}
