function findTypes (...args) {
	let types = [];
	for ( let i = 0; i < args.length; i++) {
		types.push(typeof args[i]);
	}
	return types;
}

function executeforEach (arr, enteredFunction) {
	for (let i = 0; i < arr.length; i++) {
		enteredFunction(arr[i]);
	}
}

function mapArray (arr, enteredFunction) {
	let transformedArr = [];

	function inner(element) {
		let transformedElement = enteredFunction(element);
		transformedArr.push(transformedElement);
	}

	executeforEach(arr, inner);
	return transformedArr;
}

function filterArray (arr, enteredFunction) {
	let filteredArr = [];

	function inner(element) {
		let isFiltered = enteredFunction(element);
		if (isFiltered) {
			filteredArr.push(element);
		}
	}

	executeforEach(arr, inner);
	return filteredArr;
}

function getAmountOfAdultPeople (data) {
	let ages = [];
	for (let i = 0; i < data.length; i++) {
		ages.push(data[i]["age"]);
	}

	function adultFilter (age) {
		return age >= 18;
	}

	let adults = filterArray(ages, adultFilter);
	return adults.length;
}

function getGreenAdultBananaLovers(data) {
	function greenAdultBananaLoversFilter (person) {
		return person["age"] >= 18 && person["favoriteFruit"] === "banana" && person["eyeColor"] === "green";
	}

	function nameGetter(person) {
		return person["name"];
	}

	let filteredArray = filterArray(data, greenAdultBananaLoversFilter);
	return mapArray(filteredArray, nameGetter);
}

function keys (obj) {
	let keysArr = [];
	for (let key in obj) {
		keysArr.push(key);
	}
	return keysArr;
}

function values (obj) {
	let valuesArr = [];
	for (let key in obj) {
		valuesArr.push(obj[key]);
	}
	return valuesArr;
}

function showFormattedDate(dateObj) {
	let day = dateObj.getDate();
	let year = dateObj.getFullYear();
	let dateString = dateObj.toDateString();
	let month = dateString.split(" ")[1];
	return "Date: " + day + " of " + month + ", " + year;
}

function isEvenYear (dateObj) {
	let year = dateObj.getFullYear();
	return year % 2 === 0;
}

function isEvenMonth (dateObj) {
	let month = dateObj.getMonth() + 1;
	return month % 2 === 0;
}

let data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
];
findTypes("string", 105, [], {});
getAmountOfAdultPeople(data);
keys(data[0]);
values(data[0]);
showFormattedDate(new Date('2019-01-27T01:10:00'));
isEvenYear(new Date('2019-01-27T01:10:00'));
isEvenMonth(new Date('2019-02-27T01:10:00'));
getGreenAdultBananaLovers(data);