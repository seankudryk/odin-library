const addBookButton = document.querySelector("#add-book-button");

const library = [];

function Book(author, title, readStatus) {
    this.author = author;
    this.title = title;
    this.readStatus = readStatus;
}

let authorValue = 'Sean Kudryk';
let titleValue = 'How to Catch a Big Billy Bass';
let readStatus = true;

function addBookToLibrary() {
    const newBook = new Book(authorValue, titleValue, readStatus);
    library.push(newBook);
}

addBookButton.addEventListener("click", () => {
    addBookToLibrary();
    console.log(library);
});