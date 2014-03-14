/*Using the JavaScript language, have the function BlackjackHighest(strArr) take the strArr parameter being passed which will be an array of numbers and letters representing blackjack cards. Numbers in the array will be written out. So for example strArr may be ["two","three","ace","king"]. The full list of possibilities for strArr is: two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below, above, or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must count the ace as a 1. You must always try and stay below the 21 mark. So using the array mentioned above, the output should be below king. The ace is counted as a 1 in this example because if it wasn't you would be above the 21 mark. Another example would be if strArr was ["four","ten","king"], the output here should be above king. If you have a tie between a ten and a face card in your hand, return the face card as the "highest card". If you have multiple face cards, the order of importance is jack, queen, then king. 
*/

var strArr = ["four","ace","ten"];


function BlackjackHighest(strArr) { 

  function ToNumber(numstr) {
	if (numstr == 'two') {
		return 2;
	}
	else if (numstr == 'three') {
		return 3;
	}
	else if (numstr == 'four') {
		return 4;
	}
	else if (numstr == 'five') {
		return 5;
	}
	else if (numstr == 'six') {
		return 6;
	}
	else if (numstr == 'seven') {
		return 7;
	}
	else if (numstr == 'eight') {
		return 8;
	}
	else if (numstr == 'nine') {
		return 9;
	}
	else if (numstr == 'ten') {
		return 10;
	}
	else if (numstr == 'jack') {
		return 10;
	}
	else if (numstr == 'queen') {
		return 10;
	}
	else if (numstr == 'king') {
		return 10;
	}
	else if (numstr == 'ace') {
		return 1;
	}
}

var numArr = [];
var sum = 0;
var aces = 0;
var blackjack = '';
var highest = '';

for (var i=0; i<strArr.length; i++) {
	numArr[i] = ToNumber(strArr[i]);
	sum += numArr[i];
	if (strArr == 'ace') {
		aces += 1;
	}
}
  
var max_aces = aces;

while (aces >= 0 && sum < 12) {
		sum += 10;
		aces -= 1;
}

if (sum > 21) {
	blackjack = 'above';
}
else if (sum < 21) {
	blackjack = 'below'
}
else if (sum == 21) {
	blackjack = 'blackjack';
}

if (aces < max_aces) {
	highest = 'ace';
}
else {
	var highest_num = 0;
	var highest_num_index = 0;
	for (var i=0; i<numArr.length; i++) {
		if (numArr[i] > highest_num) {
			highest_num = numArr[i];
			highest_num_index = i;
		}
	}  
	if (highest_num == 10) {
		for (var i=0; i<strArr.length; i++) {
            if (strArr[i]=='jack') {
				highest = 'jack';
				break;
			}
		}
		if (highest == '') {
			for (var i=0; i<strArr.length; i++) {
           		if (strArr[i]=='queen') {
					highest = 'queen';
					break;
				}
			}
		}
		if (highest == '') {
			for (var i=0; i<strArr.length; i++) {
        	    if (strArr[i]=='king') {
					highest = 'king';
					break;
				}
			}
		}
		if (highest == '') {
			highest = 'ten';
		}
	}
	else {
		highest = strArr[highest_num_index];
	}
}

return blackjack+' '+highest;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BlackjackHighest(readline());                            


