let myLibrary = [];
let addTableRow;
let bookTitle;
let bookAuthor;
let bookPages;
let readOrNot;

//QUERY SELECTORS
const tableContents = document.querySelector('#tBody');
const addToBookListButton = document.querySelector('#addToBookListButton');


//EVENT LISTENERS
addToBookListButton.addEventListener('click', () => {
    addBooktoMyLibrary();
    renderBooksInTable();
    console.log(myLibrary);

})
addToBookListButton.addEventListener('keypress', function(e) {
    if (e.key == 'enter'){
        addBooktoMyLibrary();
        renderBooksInTable();
    }
})

//CONSTRUCTORS
function Book (title,author,pages,readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}
//PROTOTYPES


//FUNCTIONS
function addBooktoMyLibrary () {
    bookTitle = document.getElementById('bookTitle').value;
    bookAuthor = document.getElementById('bookAuthor').value;
    bookPages = document.getElementById('bookPages').value;
    readOrNot = document.getElementById('readOrNot').value;

    const userInput = new Book (bookTitle,bookAuthor,bookPages,readOrNot);

    myLibrary.push(userInput)
}
function renderBooksInTable () {

}
function addDeleteButton () {
    
}
function addDeleteListeners () {

}




