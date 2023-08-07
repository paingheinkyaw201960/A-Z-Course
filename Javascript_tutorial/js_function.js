function getNumber(num=100)
{
    console.log(num);
}
// default の書き方num1=0
function sum(num1=0,num2=0)
{
    console.log(num1+num2);
}
var greeting=function(name)
{
    console.log("hello"+name);
}
var greeting1=(name1)=>{
    console.log(name1);
}
var greeting2=()=>console.log("hello");
var two=(a,b)=>{ return a+b;}

console.log(two(1,3));