// variables 
let a = 1;
let b = 2;
let c = a + b;
//------------------
let numvariable = 1;
let stringvariable = 'somerandomstring';
let booleanvalue = true;
//------------------
//==========================================================

// conditional statements
// if 
let country = prompt("Enter your country");

if (country === "India") {
	alert("You are Indian");
}
else {
	alert("Not sure about your nationality");
}

//=========================================================
// for loop
// Normal iteration
for (let i =0; i <10; i++){
	console.log(i);
}
//==========================================================
// function
function add(firstnumber, secondnumber){
	alert(firstnumber + secondnumber);
}

/* function call */
let a = prompt("Enter first number");
let b = prompt("Enter second number");

add(a,b);

//===========================================================
// Data Structures
// Array
let myfirstarray = ['firstelement','secondelement'];

/* accessing an array*/
myfirstarray[0]
myfirstarray[1]
//===========================================================
// Object
let myobject = {};
myobject['firstkey'] = 'firstvalue';
myobject['secondkey'] = 'secondvalue';
//console.log(myobject)
// passing function as a property

myobject['functionaskey'] = function(){console.log('text from function')};
console.log(myobject)

// calling function used inside object
console.log(myobject.functionaskey());
//=====================================================================

