var car=new Object();
car.name="BMW";
car.price="$10000";
console.log(car);

function book(title,price)
{
    this.title=title;
    this.price=price;
}

var result=new book("Myanmar","1200ks");
console.log(result);
let num=1.2313234132;
console.log(num.toFixed(3));
let name="           paing paing";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
var date =new Date();
console.log(date);
var date1="12/3/2022";
console.log(date1.split("/"));