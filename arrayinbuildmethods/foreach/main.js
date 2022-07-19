let a=["w","e","l","c","o","m","e"];
console.log("original length of array:"+a.length);
console.log("method: "+" a.foreach()");
function  myfunction(words){
    let x =words+3;
    console.log(x);
}

a.forEach(myfunction);
console.log("change in array: none");
console.log("return:length of array after foreach()"+a.length);