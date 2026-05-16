function Library(books){
    this.books = books;
    this.listBooks = function(){
    for (let i = 0; i < books.length; i++) {
        console.log((i + 1) + '. "' + this.books[i].title + '" by ' + this.books[i].author);
    }
}
}
const myLibrary = new Library([{title: "datvi", author: "ilia chavchavadze"}]);
myLibrary.listBooks();