const addBookButton = document.querySelector("#add-book-button");
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const readStatusInput = document.querySelector("#read-status-input");

const library = [];
readStatusInput.value = "";

function Book(author, title, readStatus) {
    this.author = author;
    this.title = title;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    const newBook = new Book(nameInput.value, titleInput.value, readStatusInput.value);
    library.push(newBook);
}

function resetValues() {
    nameInput.value = "";
    titleInput.value = "";
    readStatusInput.value = "";
}

addBookButton.addEventListener("click", () => {
    //if any of the fields are empty, do not push values to library and require all 3 to be valid before proceeding
    addBookToLibrary();
    resetValues();
    console.log(library);
});

