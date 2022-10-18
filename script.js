
let myLibrary = [];

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

function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        //create a card here that displays all of the information for that book.
    }




}

const b1 = new book("The Hunger Games", "Collins", 312, true);
