

var addBtn = document.getElementById('add-button');


addBtn.addEventListener('click', addBill);



function addBill(){

	var billTotal = document.getElementById('add-bill');
	var currentTotal = Number(billTotal.value);


	currentTotal = currentTotal + 1;

	billTotal.value = currentTotal;



}