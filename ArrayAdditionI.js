/*
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function ArrayAdditionI(arr) { 

	function sortNumber(a,b) { return b-a; }

	function isEmpty(obj) {
    	for(var key in obj) {
        	if(obj.hasOwnProperty(key))
            	return false;
    	}
    	return true;
	}

	arr.sort(sortNumber); 
	var original_object = {};
	original_object[arr.shift()] = arr;

	function checkInRemaining(array_remaining, remaining) {
		for (var i=0; i<array_remaining.length; i++) {
			if (array_remaining[i] == remaining) {
				return true;
			}
		}
		return false;
	}

	function checkEnoughLeft(array_remaining, remaining) {
		var sum = 0;
		for (var i=0; i<array_remaining.length; i++) {
			sum += array_remaining[i];
		}
		if (sum < remaining) {
			return false;
		}
		else {
			return true;
		}
	}

	function addToObject(old_object) {
		var new_object = {}
		for (var x in old_object) {
			for (var i=0; i<old_object[x].length; i++) {
				new_object[x-old_object[x][i]] = old_object[x].slice(i+1);
			}
		}
		for (var y in new_object) {
			if (!checkEnoughLeft(new_object[y], y)) {
				delete new_object[y];
				continue;
			}
			if (checkInRemaining(new_object[y], y)) {
				return true;
			}
		}
		if (isEmpty(new_object)) {
				return false;
		}
		return addToObject(new_object);
	}

    return addToObject(original_object);     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());  