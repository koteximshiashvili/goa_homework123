class Book {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }

    get describe() {
        return `${this.title} is a book by ${this.author} belonging to the ${this.genre} genre with ${this.pages} pages.`;
    }

    getBookInfo() {
        return `title: ${this.title}  author: ${this.author} genre: ${this.genre} pages: ${this.pages}`;
    }
}

class AdventureBook extends Book {
    constructor(title, author, pages, words, length) {
        super(title, author, 'adventure', pages);
        this.words = words;
        this.length = length;
    }

    get describe() {
        return `${this.title} is an adventure book by ${this.author} it has ${this.pages} pages.`;
    }

    getAdventureDetails() {
        return super.getBookInfo() + " hello";
    }
}
class SatiraBook extends Book {
    constructor(title, author, pages, words, length) {
        super(title, author, 'satira', pages);
        this.words = words;
        this.length = length;
    }

    get describe() {
        return `${this.title} is an satira book by ${this.author} it has ${this.pages} pages.`;
    }

    getSatiraDetails() {
        return super.getBookInfo() + " hello";
    }
}
class FantasyBook extends Book {
    constructor(title, author, pages, words, length) {
        super(title, author, 'fantasy', pages);
        this.words = words;
        this.length = length;
    }

    get describe() {
        return `${this.title} is an adventure book by ${this.author} it has ${this.pages} pages.`;
    }

    getFantasyDetails() {
        return super.getBookInfo() + " hello";
    }
}



const adventureBook = new AdventureBook("kote", "ilia wavwavedze", 200, 10000, 1000000);
console.log(adventureBook.describe)
console.log(adventureBook.getAdventureDetails())

const satiraBook = new SatiraBook("kote", "ilia wavwavedze", 200, 10000, 1000000);
console.log(satiraBook.describe)
console.log(satiraBook.getSatiraDetails())

const fantasyBook = new FantasyBook("kote", "ilia wavwavedze", 200, 10000, 1000000);
console.log(FantasyBook.describe)
console.log(FantasyBook.getFantasyDetails())