function Book(title, author = "Unknown"){
    this.title = title;
    this.author = author;
    
    this.getDetails = function(){
        console.log(this.title + " " + this.Book);
    }
}
const Book1 = new Book("datvi");
Book1.getDetails();