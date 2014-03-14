/*
Have the function SymmetricMatrix(strArr) read strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["1","0","1","<>","0","1","0","<>","1","0","1"]. There are two "<>", so 2 + 1 = 3. Therefore there will be three rows in the array and the contents will be row1=[1 0 1], row2=[0 1 0] and row3=[1 0 1]. Your program should take the given array of elements, create the proper matrix, and then determine whether the matrix is symmetric, in other words, if matrix M is equal to M transpose. If it is, return the string symmetric and if it isn't return the string not symmetric. A matrix may or may not be a square matrix and if this is the case you should return the string not possible. For the example above, your program should return symmetric. 

Advanced challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.

*/

var strArr = ["5","0","<>","0","5"];

function SymmetricMatrix(strArr) { 

  // code goes here  
  var rows = 1;
  for (var i=0; i<strArr.length; i++) {
    if (strArr[i] == '<>') {
      rows += 1;
    }
  }   
  
  var columns = 0;
  for (var i=0; i<strArr.length; i++) {
    if (strArr[i] == '<>') {
      break;
    }
    columns += 1;
  }  
  
  if (rows != columns) {
    return 'not possible';
  }
  
  var newArr = [];
  for (var i=0; i<rows; i++) {
  	newArr.push(strArr.splice(0,rows));
    strArr.shift();
  }

  for (var i=0; i<newArr.length; i++) {
  	for (var j=0; j<newArr.length; j++) {
  		if (newArr[i][j] != newArr[j][i]) {
  			return 'not symmetric';
  		}
  	}
  }

  return 'symmetric';
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SymmetricMatrix(readline());                            









