/*
Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function PrimeChecker(num) { 
	
	num = num.toString();

	function isPrime(x) {
        if (x==1) {
          return false;
        }
        if (x==2) {
          return true;
        }
		for (var i=2; i<x; i++) {
			if (x%i==0) {
				return false;
			}
		}
		return true;
	}

	function factorial(x) {
		var product = 1;
		for (var i=1; i<=x; i++) {
			product *= i;
		}
		return product;
	}

	var array_permutations = [];

	function permutate(array, x, y) {
		var newstring = '';
		for (var i=x; i<(num.length)*(num.length); i=i+y) {
			if (i>=num.length) {
				i = i%num.length;
			}	
			newstring += num[i];
			if (newstring.length == num.length) {
				array.push(newstring);
				return;
			}
		}
	}


	for (var i=0; i<num.length; i++) {
		for (var j=1; j<num.length; j++) {
			permutate(array_permutations, i, j);
		}
	}

	for(var i=0; i<array_permutations.length; i++) {
		if (isPrime(Number(array_permutations[i]))) {
			return '1';
		}
	}

	return '0';
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeChecker(readline());           
