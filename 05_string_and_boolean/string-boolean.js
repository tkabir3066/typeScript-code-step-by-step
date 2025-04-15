var str = "tutul";
var age = 20;
var userName = "Max";
//==== conversion of number to string ====//
// var info: string = userName + " is " + age + " years old";
var info = "".concat(userName, " is ").concat(age, " years old");
console.log(info);
var num = 20;
// var data: string = num.toString(); // process-1
// var data: string = String(num); // process-2
// var data: string = `${num}`; // process-3
var data = "" + num; // process-4
//==== conversion of boolean to string ====//
var isTrue = true;
var isFalse = false;
// var data: string = isTrue.toString(); // process-1
// var data: string = String(isTrue); // process-2
// var data: string = `${isTrue}`; // process-3
var data = "" + isTrue; // process-4
// possible value of boolean in typescript are true and false only
//we can not assign 1 and 0
var isLoggedIn = true;
var isLoggedOut = false;
var item = true;
var other;
other = item;
console.log(other);
