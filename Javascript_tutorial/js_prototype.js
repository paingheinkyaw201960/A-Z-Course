function Magazine(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
};
Magazine.prototype.getTitle=function()
{
    return`Book title is ${this.title}written by ${this.author}and produced in
    ${this.year}`;
};
Magazine.prototype.getYears=function(){
    const year=new Date().getFullYear()-this.year;
    return `this ${this.title} is written by ${this.author}and years= ${year}`;
};
var mega=new Magazine("OOP","Aung Aung","2020");
console.log(mega.getYears());

function News(title,author,year,month)
{
    Magazine.call(this,title,author,year);
    this.month=month;
}
News.prototype=Object.create(Magazine.prototype);

var page=new News("Myanmar","u aung","2010","june");
console.log(page.getYears());