var r=0,a,num;
num =153;
temp =num;
while(a>0){
    a=temp%10;
    r=r+a*a*a;
    num=math.round(temp/10);
}
if(r==num){
    console.log("Amstrong number");
}
else{
    console.log("Not Amstrong number");
}