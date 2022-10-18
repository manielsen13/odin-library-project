let myLibrary = [];
let bookCardsContainer = document.getElementsByClassName("bookCardsContainer")[0];
function book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author
    this.numPages = numPages;
    this.haveRead = haveRead;
}

/* this.getInfo = function() {
        return (this.title + " by " + this.author + ", " + numPages + " pages," + " have read:" + this.haveRead);
}
*/

function addBookToLibrary() {

    

}

const b1 = new book("The Hunger Games", "Collins", 312, true);
const b2 = new book("Harry Potter", "J.K. Rowling", 312, false);
myLibrary.push(b1);
myLibrary.push(b2);

function displayBooks(){
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
        newBookCard.setAttribute("id", i)

        //add components to cells
        titleCardCell.append(titleLabel, titleValue);
        authorCardCell.append(authorLabel, authorValue);
        numPagesCardCell.append(numPagesLabel, numPagesValue);
        haveReadCardCell.append(haveReadLabel, haveReadValue);

        //add cells to card
        newBookCard.append(titleCardCell, authorCardCell, numPagesCardCell, haveReadCardCell);

        //add to DOM
        bookCardsContainer.appendChild(newBookCard);
    }
}

displayBooks();
