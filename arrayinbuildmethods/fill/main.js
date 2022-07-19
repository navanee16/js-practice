let fruits = ["mango","grape","apple","orange","waremelan"];
console.log(fruits);
console.log("original length of array:",fruits.length);
console.log("method:array.fill()");
fruits.fill("ramdon",1,3);
console.log("change in array:",fruits);
console.log("change in array length after fill:",fruits.length);