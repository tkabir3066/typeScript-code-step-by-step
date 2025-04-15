var str: string = "tutul";

var age: number = 20;

var userName: string = "Max";

//==== conversion of number to string ====//
// var info: string = userName + " is " + age + " years old";

var info: string = `${userName} is ${age} years old`;
console.log(info);

var num: number = 20;
// var data: string = num.toString(); // process-1

// var data: string = String(num); // process-2

// var data: string = `${num}`; // process-3
var data: string = "" + num; // process-4
//==== conversion of boolean to string ====//

var isTrue: boolean = true;
var isFalse: boolean = false;
// var data: string = isTrue.toString(); // process-1
// var data: string = String(isTrue); // process-2
// var data: string = `${isTrue}`; // process-3
var data: string = "" + isTrue; // process-4

// possible value of boolean in typescript are true and false only
//we can not assign 1 and 0
var isLoggedIn: boolean = true;
var isLoggedOut: boolean = false;

var item: boolean = true;
var other: boolean;

other = item;

console.log(other);
