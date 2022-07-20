var num = prompt("enter the value");
var text;
function myfunction(num){
if(num==0){
    text="zero";
}
else if (num==1) {
    text="one";
} 
else if(num==2) {   
     text="two";
}
else if(num==3){
    text="three";
}
else if(num==4){
    text="four";
}
else if(num==5){
    text="five";
}
else if(num==6){
    text="six";
}
else if(num==7){
    text="seven";
}
else if(num==8){
    text="eight";
}
else if(num==9){
    text="nine";
}
return text;
}
var a ;

var rem;
while(num!=0){
    rem=num%10;
    a=myfunction(rem);
    b=a;
    num=(num-rem)/10;
    console.log(b);
}
   