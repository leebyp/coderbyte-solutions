/*
Have the function IntersectingLines(strArr) take strArr which will be an array of 4 coordinates in the form: (x,y). Your program should take these points where the first 2 form a line and the last 2 form a line, and determine whether the lines intersect, and if they do, at what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"], then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3) intersect at (9/5,12/5). Your output should therefore be the 2 points in fraction form in the following format: (9/5,12/5). If there is no denominator for the resulting points, then the output should just be the integers like so: (12,3). If any of the resulting points is negative, add the negative sign to the numerator like so: (-491/63,-491/67). If there is no intersection, your output should return the string "no intersection". The input points and the resulting points can be positive or negative integers.

Hard challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.
*/


function IntersectingLines(strArr) { 


function decimal_places(num) {
	for (var i=0; i<num.length; i++) {
		if (num[i]=='.') {
			return num.length-1-i;
		}
	}
	return '0';
}

function to_fraction(num) {
	var fraction = [];
	fraction.push(num*Math.pow(10,decimal_places(num)+1));
	fraction.push(Math.pow(10,decimal_places(num)+1));
	if (fraction[0]>fraction[1]) {
		var lower = fraction[1];
	}
	else if (fraction[1]>fraction[0]) {
		var lower = fraction[0];
	}
	for (var i=lower-1; i>1; i--) {
		if (fraction[0]%i==0 && fraction[1]%i==0) {
			fraction[0] = fraction[0]/i;
			fraction[1] = fraction[1]/i;
		}
	}
	if (fraction[1] == 1) {
		return fraction[0];
	}
	return fraction[0]+'/'+fraction[1];
}

var points = [];
for (var i=0; i<strArr.length; i++) {
	points.push(strArr[i].match(/[0-9\-]{1,}/g));
}
for (var i=0; i<3; i++) {
	for (var j=0; j<2; j++) {
		points[i][j] = Number(points[i][j]);
	}
}

var m1 = (points[0][1]-points[1][1])/(points[0][0]-points[1][0]);
var m2 = (points[2][1]-points[3][1])/(points[2][0]-points[3][0]);

if (m1 == m2) {
	return 'no intersection';
}

var intercept = [];

if (m1 == 'Infinity') {
	intercept[0] = points[0][0];
	if (m2 == 0) {
		intercept[1] = points[2][1];
	}
	else {
		var c2 = (points[2][1]-m2*points[2][0]);
		intercept[1] = m2*intercept[0] + c2;
	}
}

else if (m2 == 'Infinity') {
	intercept[0] = points[2][0];
	if (m1 == 0) {
		intercept[1] = points[0][1];
	}
	else {
		var c1 = (points[0][1]-m1*points[0][0]);
		intercept[1] = m1*intercept[0] + c1;
	}
}

else {
	var c1 = (points[0][1]-m1*points[0][0]);
	var c2 = (points[2][1]-m2*points[2][0]);
	intercept[0] = (c2-c1)/(m1-m2);
	intercept[1] = m1*intercept[0]+c1;	
}



// limits1[lowx, highx, lowy, highy]
// limits2[lowx, highx, lowy, highy]
var limits1 = [];
var limits2 = [];

if (points[0][0] > points[1][0]) {
	limits1[0] = points[1][0];
	limits1[1] = points[0][0];
}
else if (points[1][0] > points[0][0]) {
	limits1[0] = points[0][0];
	limits1[1] = points[1][0];
} 

if (points[0][1] > points[1][1]) {
	limits1[2] = points[1][1];
	limits1[3] = points[0][1];
}
else if (points[1][1] > points[0][1]) {
	limits1[2] = points[0][1];
	limits1[3] = points[1][1];
}

if (points[2][0] > points[3][0]) {
	limits2[0] = points[3][0];
	limits2[1] = points[2][0];
}
else if (points[3][0] > points[2][0]) {
	limits2[0] = points[2][0];
	limits2[1] = points[3][0];
} 

if (points[2][1] > points[3][1]) {
	limits2[2] = points[3][1];
	limits2[3] = points[2][1];
}
else if (points[3][1] > points[2][1]) {
	limits2[2] = points[2][1];
	limits2[3] = points[3][1];
}

if (intercept[0] < limits1[0] || intercept[0] > limits1[1] || intercept[0] < limits2[0] || intercept[0] > limits2[1] || intercept[1] < limits1[2] || intercept[1] > limits1[3] || intercept[1] < limits2[2] || intercept[1] > limits2[3]) {
	return 'no intersection';
}

for (var i=0; i<intercept.length; i++) {
	intercept[i] = to_fraction(intercept[i]);
}

var results = '(' + intercept.join(',') + ')';

return results;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
IntersectingLines(readline());   