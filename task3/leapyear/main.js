year = prompt("enter the year:");
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(year + "leap year");
}
else{
    console.log(year + "not leap year");
}