var userName: undefined | string = undefined;
var isLoggedIn: boolean = true;
if (isLoggedIn) {
  userName = "Max";
}

console.log(userName);

// null vs undefined

console.log(null === undefined); //false
console.log(null == undefined); //true
