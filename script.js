const addBookButton = document.querySelector("#add-book-button");
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const pageCountInput = document.querySelector("#page-count-input")
const readStatusInput = document.querySelector("#read-status-input");
const cardContainer = document.querySelector(".card-container");

const library = [];
readStatusInput.value = null;

function Book(author, title, pageCount, readStatus, index) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.index = index;
    this.toggleRead = function() {
        if(readStatus === "Read") {
            console.log("The read status of this book entry is Read");
        } else if (readStatus === "Not Read") {
            console.log("The read status of this book entry is NOT Read");
        } else {
            console.log("The read status is not set");
        }
    };
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

let removedIndex;

//event delegation to check for click events with conditional branching dependent on the class of the button element (in this case, .delete-button or .toggle-read)
cardContainer.addEventListener("click", (e) => {
    let target = e.target;

    //functionality for delete button
    if (target.classList.contains("delete-button")) {
        const eventTarget = target.parentNode;
        for (let i = 0; i < library.length; i++) {
            if(library[i].index === parseInt(eventTarget.getAttribute("id"))) {
                removedIndex = library.splice(library[i].index, 1);
            };
        };
        //remove the parent node of the div the delete button was clicked within 
        eventTarget.parentNode.removeChild(eventTarget);
        
        //after deleting the appropriate index from library array, loop back over the array for i = 0; i < library.length; i++ => index = i;
        for (let i = 0; i < library.length; i++) {
            library[i].index = i;
        }
    };    

    //functionality for toggle buttons
    if(target.classList.contains("toggle-read-button")) {
        let readStatusOutput = target.previousSibling.previousSibling.previousSibling.previousSibling.lastChild.previousSibling.value;
        readStatusOutput
    }
});

function createCard() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardContainer.appendChild(cardDiv);

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
                <button class="toggle-read-button">Toggle Read</button>`
    }
}
