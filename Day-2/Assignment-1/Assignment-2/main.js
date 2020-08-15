var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("trial").innerHTML = fruits.join("-");
fruits.pop()
document.getElementById("pop").innerHTML = fruits;
fruits.push("Kiwi")
document.getElementById("push").innerHTML = fruits;
fruits.shift();
document.getElementById("shift").innerHTML = fruits;
fruits.unshift();
document.getElementById("unshift").innerHTML = fruits;
document.getElementById("index").innerHTML = fruits[0];
document.getElementById("length").innerHTML = fruits.length;
fruits.slice(1,0);
document.getElementById("slice").innerHTML = fruits;

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);

console.log(myChildren);