// Object Oriented Programming in JS

// JS allows us to create object without defining the class

var bird = {
	x: 10,
	y: 20,
	color: "Red",
	eggs: ["first","second","third"],

	fly: function(){
		console.log("Bird is flying ", this.x, this.y);
	}
};

// for (var i = bird.eggs.length - 1; i >= 0; i--) {
// 	console.log(bird.eggs[i]);
// }

/*Ways of creating objects*/

// one way
var apple={
	taste: "Sweet",
	color: "Red",
};

// another way is using new keyword

function Fruit(taste,color){
	this.taste=taste;
	this.color=color;
}

let mango = new Fruit("Sweet","Yellow");
let orange = new Fruit("Sour", "Orange");


// Using Class keyword
// Class declaration
class FruitClass{
	constructor(taste,color){
		this.taste=taste;
		this.color=color;
	}
};
// Class expression
let FruitClass2 = class{
	constructor(taste,color){
		this.color=color;
		this.taste=taste;
	}
}

let kiwi = new FruitClass("Bitter", "Green");
let kiwi2 = new FruitClass2("Sour", "light green");