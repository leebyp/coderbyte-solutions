/*
Have the function QueenCheck(strArr) read strArr which will be an array consisting of the locations of a Queen and King on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x1,y1)","(x2,y2)"] with (x1,y1) representing the position of the queen and (x2,y2) representing the location of the king with x and y ranging from 1 to 8. Your program should determine if the king is in check based on the current positions of the pieces, and if so, return the number of spaces it can move to in order to get out of check. If the king is not in check, return -1. For example: if strArr is ["(4,4)","(6,6)"] then your program should output 6. Remember, because only the queen and king are on the board, if the queen is checking the king by being directly adjacent to it, technically the king can capture the queen. 

Advanced challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.
*/


var strArr = ["(1,1)","(1,4)"];
//8x8 board, 1-8

var queen =  strArr[0].match(/[0-9]{1}/g);
var king =  strArr[1].match(/[0-9]{1}/g);

for (var i=0; i<2; i++) {
    queen[i] = Number(queen[i]);
    king[i] = Number(king[i]);
}
  

function ValidPosition(array) {
	if (array[0] < 1 || array[0] > 8) {
		return false;
	}
	if (array[1] < 1 || array[1] > 8) {
		return false;
	}
	return true;
}

function KingsMoves(array) {
	var moves = [];
	if (ValidPosition([array[0],array[1]+1])) {
		moves.push([array[0],array[1]+1]);
	}
	if (ValidPosition([array[0]+1,array[1]+1])) {	
		moves.push([array[0]+1,array[1]+1]);
	}
	if (ValidPosition([array[0]+1,array[1]])) {
		moves.push([array[0]+1,array[1]]);
	}
	if (ValidPosition([array[0]+1,array[1]-1])) {
		moves.push([array[0]+1,array[1]-1]);
	}
	if (ValidPosition([array[0],array[1]-1])) {
		moves.push([array[0],array[1]-1]);
	}
	if (ValidPosition([array[0]-1,array[1]-1])) {
		moves.push([array[0]-1,array[1]-1]);
	}
	if (ValidPosition([array[0]-1,array[1]])) {
		moves.push([array[0]-1,array[1]]);
	}
	if (ValidPosition([array[0]-1,array[1]+1])) {
		moves.push([array[0]-1,array[1]+1]);
	}
	return moves;
}

if (king[0] != queen[0] && king[1] != queen[1] && Math.abs(king[0]-queen[0]) != Math.abs(king[1]-queen[1])) {
	return '-1'
}


var kingPositions = KingsMoves(king);
var notAllowed = 0;


for (var i=0; i<kingPositions.length; i++) {
	if (kingPositions[i][0] == queen[0] && kingPositions[i][1] == queen[1]) {
		return '-1';
	}
	if (kingPositions[i][0] == queen[0]) {
		notAllowed += 1;
		continue;
	}
	if (kingPositions[i][1] == queen[1]) {
		notAllowed += 1;
		continue;
	}
	if (Math.abs(kingPositions[i][0]-queen[0]) == Math.abs(kingPositions[i][1]-queen[1])) {
		notAllowed += 1;
		continue;
	}
}

return kingPositions.length-notAllowed;



