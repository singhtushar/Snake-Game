// JS Introduction
console.log("Hello World!!");

// Variables

c=20; // Global Scope
var d=20; // Functional Scope
let e=30; // Block Scope

// Functions

function sqrt(n) {
	return Math.sqrt(n);
}

var funcVar=function(){
	return ("Function Variables are Not Hoisted");
	// related to JSON
}

// Arrays

arr=["Mango", "Apple", "Guava", "Banana"];

for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}

/* Opertations on Array

1) arr.push(x) // pushes element at the end of array
2) arr.pop()   // pops and returns the last element of array
3) arr.unshift(x) // pushes element x at the front of array
4) arr.shift(x) // removes the front element of the array
5) arr.indexOf(x) // returns index of element x

*/