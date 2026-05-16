class Book {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        // this.describe = `<div class="item">
        //     <p>title: ${this.title}</p>
        //     <p>author: ${this.author}</p>
        //     <p>genre: ${this.genre}</p>
        //     <p>pages: ${this.pages}</p>
        // </div>`
    }

    get describe() {
        return `<div class="item">
            <p>title: ${this.title}</p>
            <p>author: ${this.author}</p>
            <p>genre: ${this.genre}</p>
            <p>pages: ${this.pages}</p>
        </div>`;
    }
}

class Books{
    constructor(items){
        this.items = items;
    };
    render(){
        this.items.forEach(item => {
            document.querySelector('.books').innerHTML += item.describe;
        });
    }
}
let book = new Book("kote", "ilia wavwavadze", "adventure", 210)
book.author = "sulxan saba orbaliani"
let books = [
    book,
    new Book("kote", "ilia wavwavadze", "fantasy", 200)
];
new Books(books).render();