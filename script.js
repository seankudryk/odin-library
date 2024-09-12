const addBookButton = document.querySelector("#add-book-button");
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const pageCountInput = document.querySelector("#page-count-input")
const readStatusInput = document.querySelector("#read-status-input");
const cardContainer = document.querySelector(".card-container");

const library = [];
readStatusInput.value = "";

function Book(author, title, pageCount, readStatus, index) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.index = index;
}

function addBookToLibrary() {
    const newBook = new Book(nameInput.value, titleInput.value, pageCountInput.value,readStatusInput.value, library.length);
    library.push(newBook);
}

function resetValues() {
    nameInput.value = "";
    titleInput.value = "";
    pageCountInput.value = "";
    readStatusInput.value = "";
}

addBookButton.addEventListener("click", () => {
    //if any of the fields are empty, do not push values to library and require all 3 to be valid before proceeding
    addBookToLibrary();
    resetValues();
    createCard();
    console.log(library);
});

function createCard() {
    //create the main div for the card and append it to the card container div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardContainer.appendChild(cardDiv);
    //add content to the card

    //set i to be equal to the library length - 1 (arrays are 0 indexed so i will always be equal to the most recently added index of the library array)
    for (let i = library.length - 1; i === library.length - 1; i++) {
        cardDiv.setAttribute("id",`${i}`);
        cardDiv.innerHTML = 
                `<div class="author-name-div card-row">
                    <div class="author-name-label">Author Name: </div>
                    <div class="author-name-output">${library[i].author}</div>
                </div>
                <div class="book-name-div card-row">
                    <div class="book-name-label">Book Name: </div>
                    <div class="book-name-output">${library[i].title}</div>
                </div>
                <div class="page-count-div card-row">
                    <div class="page-count-label">Page Count: </div>
                    <div class="page-count-output">${library[i].pageCount}</div>
                </div>
                <div class="read-status-div card-row">
                    <div class="read-status-label">Read Status: </div>
                    <div class="read-status-output">${library[i].readStatus}</div>
                </div>
                <button class="delete-button">Delete Entry</button>
                <button class="toggle-read">Toggle Read</button>`
    }
}
