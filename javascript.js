/*
JavaScript
Panov Alexander
*/



var houroutput = [
	'',
	'',
	'',
	'',
	''
];

var zero = [
	'#######',
	'#     #',
	'#.    #',
	'#     #',
	'#######'
];

var one = [
	'   ####',
	'  #   #',
	'#     #',
	'     .#',
	'      #'
];

var two = [
	'#######',
	'#     #',
	'    #  ',
	' #     ',
	'#######'
];

var three = [
	'#######',
	'      #',
	'    ###',
	'      #',
	'#######'
];
var four = [
	'#     #',
	'#     #',
	'#######',
	'      #',
	'      #'
];
var five = [
	'#######',
	'#      ',
	'#######',
	'      #',
	'#######'
];
var six = [
	'#######',
	'#      ',
	'#######',
	'#     #',
	'#######'
];
var seven = [
	'#######',
	'     ##',
	'   ##  ',
	'  ##   ',
	'##     '
];
var eight = [
	'#######',
	'#     #',
	'#######',
	'#     #',
	'#######'
];
var nine = [
	'#######',
	'#     #',
	'#######',
	'      #',
	'      #'
];
var separator = [
	'       ',
	'   #   ',
	'       ',
	'   #   ',
	'       '
];


function summaElementov(first, second, fl) {
	for (i = 0; i < first.length; i++) {
		first[i] = first[i] + '     ' + second[i];
	}
	return first;

}


(function () {
	var time = new Date();
	var hour = String(time.getHours());
	var minute = String(time.getMinutes());


	//take the first character of the hour
	var oneHour = hour.charAt(0);

	if (hour.length < 2) houroutput = summaElementov(houroutput, zero);

	switch (oneHour) {
		case '0':
			houroutput = summaElementov(houroutput, zero);
			break;
		case '1':
			houroutput = summaElementov(houroutput, one);
			break;
		case '2':
			houroutput = summaElementov(houroutput, two);
			break;
		case '3':
			houroutput = summaElementov(houroutput, three);
			break;
		case '4':
			houroutput = summaElementov(houroutput, four);
			break;
		case '5':
			houroutput = summaElementov(houroutput, five);
			break;
		case '6':
			houroutput = summaElementov(houroutput, six);
			break;
		case '7':
			houroutput = summaElementov(houroutput, seven);
			break;
		case '8':
			houroutput = summaElementov(houroutput, eight);
			break;
		case '9':
			houroutput = summaElementov(houroutput, nine);
			break;
	}

	var oneHourTwo = hour.charAt(1);
	switch (oneHourTwo) {
		case '0':
			houroutput = summaElementov(houroutput, zero);
			break;
		case '1':
			houroutput = summaElementov(houroutput, one);
			break;
		case '2':
			houroutput = summaElementov(houroutput, two);
			break;
		case '3':
			houroutput = summaElementov(houroutput, three);
			break;
		case '4':
			houroutput = summaElementov(houroutput, four);
			break;
		case '5':
			houroutput = summaElementov(houroutput, five);
			break;
		case '6':
			houroutput = summaElementov(houroutput, six);
			break;
		case '7':
			houroutput = summaElementov(houroutput, seven);
			break;
		case '8':
			houroutput = summaElementov(houroutput, eight);
			break;
		case '9':
			houroutput = summaElementov(houroutput, nine);
			break;
	}

	houroutput = summaElementov(houroutput, separator);


	//take the first character of the minutes
	var oneMinute = minute.charAt(0);

	if (minute.length < 2) houroutput = summaElementov(houroutput, zero);

	switch (oneMinute) {
		case '0':
			houroutput = summaElementov(houroutput, zero);
			break;
		case '1':
			houroutput = summaElementov(houroutput, one);
			break;
		case '2':
			houroutput = summaElementov(houroutput, two);
			break;
		case '3':
			houroutput = summaElementov(houroutput, three);
			break;
		case '4':
			houroutput = summaElementov(houroutput, four);
			break;
		case '5':
			houroutput = summaElementov(houroutput, five);
			break;
		case '6':
			houroutput = summaElementov(houroutput, six);
			break;
		case '7':
			houroutput = summaElementov(houroutput, seven);
			break;
		case '8':
			houroutput = summaElementov(houroutput, eight);
			break;
		case '9':
			houroutput = summaElementov(houroutput, nine);
			break;
	}

	var oneMinuteTwo = minute.charAt(1);
	switch (oneMinuteTwo) {
		case '0':
			houroutput = summaElementov(houroutput, zero);
			break;
		case '1':
			houroutput = summaElementov(houroutput, one);
			break;
		case '2':
			houroutput = summaElementov(houroutput, two);
			break;
		case '3':
			houroutput = summaElementov(houroutput, three);
			break;
		case '4':
			houroutput = summaElementov(houroutput, four);
			break;
		case '5':
			houroutput = summaElementov(houroutput, five);
			break;
		case '6':
			houroutput = summaElementov(houroutput, six);
			break;
		case '7':
			houroutput = summaElementov(houroutput, seven);
			break;
		case '8':
			houroutput = summaElementov(houroutput, eight);
			break;
		case '9':
			houroutput = summaElementov(houroutput, nine);
			break;
	}


	for (i = 0; i < houroutput.length; i++) {
		console.log(houroutput[i] + "\n")
	}

	
})();