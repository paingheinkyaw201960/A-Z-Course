class Book{
    constructor(title,author,year)
    {
        this.title=title;
        this.author=author;
        this.year=year;
    }
    setTitle(){
        this.title="English";
    }
}
const book1=new Book("myanmar","mg mg",2000);
console.log(book1);
book1.setTitle();
console.log(book1);