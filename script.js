let myLibrary = [];
let bookCardsContainer = document.getElementsByClassName("bookCardsContainer")[0];
let addNewBookButton = document.getElementById("addNewBookButton");
let formPageBackground = document.getElementById("formPageBackground");

//form stuff
let exitFormButton = document.getElementById("exitFormButton");
let submitButton = document.getElementById("submitButton");
let titleField = document.getElementById("book_title");
let authorField = document.getElementById("book_author");
let pagesField = document.getElementById("num_pages");
let yesReadSelection = document.getElementById("yes_read");

function book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function clearDisplay() {
    while (bookCardsContainer.firstChild) {
        bookCardsContainer.removeChild(bookCardsContainer.firstChild);
    }
}

function displayBooks() {
    //first, wipe the current display
    clearDisplay();
    //loop through all books in the book list
    for (let i = 0; i < myLibrary.length; i++) {
        //make the components of the card cells, add class to the values
        const titleLabel = document.createElement("div");
        titleLabel.textContent = "Title: ";

        const titleValue = document.createElement("div");
        titleValue.textContent = myLibrary[i].title;
        

        const authorLabel = document.createElement("div");
        authorLabel.textContent = "Author: ";

        const authorValue = document.createElement("div");
        authorValue.textContent = myLibrary[i].author;
       

        const numPagesLabel = document.createElement("div");
        numPagesLabel.textContent = "Number of Pages: ";

        const numPagesValue = document.createElement("div");
        numPagesValue.textContent = myLibrary[i].numPages;
       

        const haveReadLabel = document.createElement("div");
        haveReadLabel.textContent = "Finished Reading? ";

        const haveReadValue = document.createElement("div");
        haveReadValue.textContent = myLibrary[i].haveRead;
    

        //make the card cells
        const titleCardCell = document.createElement("div");
        titleCardCell.classList.add("cardCell");

        const authorCardCell = document.createElement("div");
        authorCardCell.classList.add("cardCell");

        const numPagesCardCell = document.createElement("div");
        numPagesCardCell.classList.add("cardCell");

        const haveReadCardCell = document.createElement("div");
        haveReadCardCell.classList.add("cardCell");

        //make the new card
        const newBookCard  = document.createElement("div");
        newBookCard.classList.add("bookCard");

        //create buttons
        const removeBookButton = document.createElement("button");
        removeBookButton.textContent = "X"
        removeBookButton.classList.add("removeBookButton");
        removeBookButton.setAttribute("id", i)
        removeBookButton.addEventListener("click", function () {
            myLibrary.splice(this.id, 1);
            displayBooks();
        });

        const changeReadStatusButton = document.createElement("button");
        changeReadStatusButton.textContent = "Toggle";
        changeReadStatusButton.classList.add("readToggleButton");
        changeReadStatusButton.setAttribute("data-index-number", i);
        changeReadStatusButton.addEventListener("click", function() {
            console.log(myLibrary[this.getAttribute("data-index-number")]);
            if (myLibrary[this.getAttribute("data-index-number")].haveRead == "Yes") {
                myLibrary[this.getAttribute("data-index-number")].haveRead = "No";
            } else {
                myLibrary[this.getAttribute("data-index-number")].haveRead = "Yes";
            }
            displayBooks();




        })

        

        //add components to cells
        titleCardCell.append(titleLabel, titleValue);
        authorCardCell.append(authorLabel, authorValue);
        numPagesCardCell.append(numPagesLabel, numPagesValue);
        haveReadCardCell.append(haveReadLabel, haveReadValue);

        //add cells to card
        newBookCard.append(removeBookButton, titleCardCell, authorCardCell, numPagesCardCell, haveReadCardCell, changeReadStatusButton);

        //add to DOM
        bookCardsContainer.appendChild(newBookCard);
    }
}

//add functionality for buttons
addNewBookButton.addEventListener("click", function () {
    formPageBackground.style.display = "flex";
})

exitFormButton.addEventListener("click", function () {
    formPageBackground.style.display = "none";
})

submitButton.addEventListener("click", function () {
    formPageBackground.style.display = "none";

    //Check to see if it has been read
    let hasRead = "No";

    if (yesReadSelection.checked) {
        hasRead = "Yes";
    }

    const theBook = new book(titleField.value, authorField.value, pagesField.value, hasRead);
    myLibrary.push(theBook);

    displayBooks();
})











//Run the initial code
const b1 = new book("The Hunger Games", "Collins", 312, "Yes");
const b2 = new book("Harry Potter", "J.K. Rowling", 312, "No");
myLibrary.push(b1);
myLibrary.push(b2);
displayBooks();
