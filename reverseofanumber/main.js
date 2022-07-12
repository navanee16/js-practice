let rev=0;
let num=123;
let lastdigit;
while (num !=0){
lastdigit= num % 10;
rev=rev * 10+ lastdigit;
num=(num - lastdigit) / 10;
}
console.log("rev");