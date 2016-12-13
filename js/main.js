



addOption('start-time');
addOption('stop-time');


function addOption(element){



	var time = document.getElementById(element);


	// Use military time as start and end times 
	var startingTime = 5;
	var endingTime = 18;
	var thisTime = 0;

	var allTimes = [];


	for (hour = 5; hour <= 18; hour++) { 
    	// allTimes.push(i);

    	for (min = 0; min < 60; min+=15) { 

    		var minutes = min;

    		if (minutes == 0) {
    			console.log(minutes);
    			minutes = "00";
    		} 

	    	
	    	var option = document.createElement('option');
	    	option.text = hour + ":" + minutes;
	    	time.add(option);

		}


	}




	// for (i = startingTime; i < endingTime; i+100) { 
    	
 //    	var option = document.createElement('option');
	// 	option.text = i;
	// 	time.add(option);

	// }

}




var addBtn = document.getElementById('add-button');


addBtn.addEventListener('click', addBill);






function addBill(){

	var billTotal = document.getElementById('add-bill');
	var currentTotal = Number(billTotal.value);


	currentTotal = currentTotal + 1;

	billTotal.value = currentTotal;



}