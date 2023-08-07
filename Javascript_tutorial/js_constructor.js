var str="hello";//String
var ob=new String("hello");//object

// litral obj
const book={
    title:"bb",
    year:"2023",
    getTitle: function(){
        return `this title is ${this.title}`;
    },
};
console.log(book.getTitle());

//constructor
// function Magazine(title,author,year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
//     this.getTitle1=function()
//     {
//         return `this title is ${this.title}`;
//     };
// }
// var mega=new Magazine("English","Mg Mg","2021");
// console.log(mega.getTitle1());