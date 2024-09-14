const addBookButton = document.querySelector("#add-book-button");
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const pageCountInput = document.querySelector("#page-count-input")
const readStatusInput = document.querySelector("#read-status-input");
const cardContainer = document.querySelector(".card-container");
const newEntryButton = document.querySelector(".new-entry-button");
const cancelEntryButton = document.querySelector(".cancel-entry-button");
const dialog = document.querySelector("dialog");
const library = [];
readStatusInput.value = null;

function Book(author, title, pageCount, readStatus, index) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.index = index;
    this.toggleRead = function() {
        if (this.readStatus) {
            if (this.readStatus === "read") {
                return this.readStatus = "not-read";
            } else {
                return this.readStatus = "read";
            }
        } else {
            console.log("Read Status is not set");
        }
    }
}

function addBookToLibrary() {
    const newBook = new Book(nameInput.value, titleInput.value, pageCountInput.value,readStatusInput.value, library.length);
    library.push(newBook);
}

function resetValues() {
    nameInput.value = null;
    titleInput.value = null;
    pageCountInput.value = null;
    readStatusInput.value = null;
}

addBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    resetValues();
    createCard();
    dialog.close();
});

newEntryButton.addEventListener("click", () => {
    dialog.show();
});

cancelEntryButton.addEventListener("click", () => {
    dialog.close
});

//event delegation to check for click events with conditional branching dependent on the class of the button element (in this case, .delete-button or .toggle-read)
cardContainer.addEventListener("click", (e) => {
    const target = e.target;
    const eventTarget = target.parentNode;
    for (let i = 0; i < library.length; i++) {
        if (library[i].index === parseInt(eventTarget.getAttribute("id"))) {
            //functionality if event target has class .delete-button
            if (target.classList.contains("delete-button")) {
                eventTarget.parentNode.removeChild(eventTarget);
                library.splice(library[i].index, 1);
                //reassign index values in library array and div ids once a div is deleted
                library.forEach((item, j) => {
                    let cardId = document.querySelectorAll(".card");
                    item.index = j;
                    cardId[j].id = `${j}`;
                });
            }
            //functionality if event target has class .toggle-read-button
            if (target.classList.contains("toggle-read-button")) {
                library[i].toggleRead();
                let targetTextOutput = document.querySelectorAll(".read-status-output")[i];
                targetTextOutput.textContent = library[i].readStatus;
            }
        };
    };
});    

function createCard() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardContainer.appendChild(cardDiv);

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
