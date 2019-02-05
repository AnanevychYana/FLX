var price = prompt ("Enter price without discount: ");
var discount = prompt ("Enter discount:");

if (isNaN(price) || price === ""|| price < 0 || price > 9999999) {
	alert("Invalid input data");
} else if (isNaN(discount) || discount === "" || discount < 0 || discount > 99) {
	alert("Invalid input data");
} else {
	var priceWithDiscount = price - (price / 100 * discount);
	var saved = price - priceWithDiscount;

	alert("Price without discount: " + price + 
		"\nEnter discount: " + discount +
		"%\nPrice with discount: " + (+priceWithDiscount.toFixed(2)) +
		"\nSaved: " + (+saved.toFixed(2)));
}