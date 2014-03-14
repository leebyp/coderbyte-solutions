var strArr = ["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"]
var timesArr = [];

/*
Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/


function MostFreeTime(strArr) { 

var timesArr = [];

for (var j=0; j<strArr.length; j++){
	var times = strArr[j].match(/[0-9]{1,}/g);
  	var periods = strArr[j].match(/[A-Z]{1,}/gi);
  
  	for (var i=0; i<times.length; i++) {
    	times[i] = Number(times[i]);
  	}
  
 	if (times[0] == 12) {
    	if (periods[0] == 'AM') {
      	times[0] = 0;
    	}
  	}
  	else {
    	if (periods[0] == 'PM') {
      	times[0] += 12;
    	}
  	}
  
  	if (times[2] == 12) {
    	if (periods[1] == 'AM') {
      	times[2] = 0;
    	}
  	}
  	else {
    	if (periods[1] == 'PM') {
      	times[2] += 12;
    	}
  	}

  	timesArr.push(times);
}


  
var orderObj = {};
for (var i=0; i<timesArr.length; i++){
	orderObj[timesArr[i][0]*60+timesArr[i][1]] = i;
}

var orderedTimesArr = [];
for (var x in orderObj) {
	orderedTimesArr.push(timesArr[orderObj[x]]); 
}

var arrayBreaks = [];
for (var i=0; i<orderedTimesArr.length-1; i++){
	var breakLength = (orderedTimesArr[i+1][0]*60+orderedTimesArr[i+1][1]) - (orderedTimesArr[i][2]*60+orderedTimesArr[i][3]);
	arrayBreaks.push(breakLength);
}

var maxBreak = Math.max.apply(null, arrayBreaks);
var result = '';

if (Math.floor(maxBreak/60 < 10)){
	result += "0";
}
result += Math.floor(maxBreak/60) + ":";
if (maxBreak%60 < 10){
	result += '0';
}
result += maxBreak%60;

return result;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MostFreeTime(readline());                            















                            
                            
                            
  