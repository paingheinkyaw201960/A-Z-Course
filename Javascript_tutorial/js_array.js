 var fruits=["mango","banana","apple","orange"];

for(var i=0;i<fruits.length-1;i++)
{
    console.log(fruits[i]);
}
// associate Array
var associateArray=[];
associateArray["name"]="mg mg";
associateArray["age"]=30;

var asso1=
{
    name2:"kyaw kyaw",
    age:30,
    greeting3(){
        console.log(`hello $(this.name2)`);
    }
}
var asso2=[1,2,3,4];
asso2.unshift(5,6,7);
console.log(asso2);

let result=asso2.map(function(n)
{
    return n*10;
});
console.log(result);

