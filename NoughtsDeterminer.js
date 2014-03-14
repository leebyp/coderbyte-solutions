/*
Have the function NoughtsDeterminer(strArr) take the strArr parameter being passed which will be an array of size eleven. The array will take the shape of a Tic-tac-toe board with spaces strArr[3] and strArr[7] being the separators ("<>") between the rows, and the rest of the spaces will be either "X", "O", or "-" which signifies an empty space. So for example strArr may be ["X","O","-","<>","-","O","-","<>","O","X","-"]. This is a Tic-tac-toe board with each row separated double arrows ("<>"). Your program should output the space in the array by which any player could win by putting down either an "X" or "O". In the array above, the output should be 2 because if an "O" is placed in strArr[2] then one of the players wins. Each board will only have one solution for a win, not multiple wins. You output should never be 3 or 7 because those are the separator spaces. 

Hard challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

/*var strArr = ["X","-","O","<>","-","-","O","<>","-","-","X"];
var x = strArr;

// code goes here  
  0 1 2
  4 5 6
  8 9 10
    
  01;12;02;45;56;46;89;910;810;04;48;08;15;59;19;26;610;210;05;510;010;25;58;28;
*/  

function NoughtsDeterminer(strArr) { 

  
var x = strArr;


for (var i=0; i<3; i++) {
	if (x[i] != '-') {
		if (x[i+4] == x[i] && x[i+8] == '-') {
			return i+8;
		}
		if (x[i+8] == x[i] && x[i+4] == '-') {
			return i+4;
		}
	}	
	else {
		if (x[i+4] != '-') {
			if (x[i+4] == x[i+8]) {
				return i;
			}
		}
	}
}

for (var i=0; i<9; i=i+4) {
	if (x[i] != '-') {
		if (x[i+1] == x[i] && x[i+2] == '-') {
			return i+2;
		}
		if (x[i+2] == x[i] && x[i+1] == '-') {
			return i+1;
		}
	}	
	else {
		if (x[i+1] != '-') {
			if (x[i+1] == x[i+2]) {
				return i;
			}
		}
	}
}

if (x[0] != '-') {
	if (x[5] == x[0] && x[10] == '-') {
		return '10';
	}
	if (x[10] == x[0] && x[5] == '-') {
		return '5';
	}
}	
else {
	if (x[5] != '-') {
		if (x[5] == x[10]) {
			return '0';
		}
	}
}

if (x[2] != '-') {
	if (x[5] == x[2] && x[8] == '-') {
		return '8';
	}
	if (x[8] == x[0] && x[5] == '-') {
		return '5';
	}
}	
else {
	if (x[5] != '-') {
		if (x[5] == x[8]) {
			return '2';
		}
	}
}
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NoughtsDeterminer(readline());    