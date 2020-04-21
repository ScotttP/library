let myLibrary = [];
let addTableRow;
let bookTitle;
let bookAuthor;
let bookPages;
let readOrNot;
let userInput;
//QUERY SELECTORS
const tableContents = document.querySelector('#tBody');
const addToBookListButton = document.querySelector('#addToBookListButton');

clearInputs();//sets all of the inputs to blank

//EVENT LISTENERS
addToBookListButton.addEventListener('click', () => {
    addBooktoMyLibrary();
    renderBooksInTable(userInput);
    clearInputs();
    
})
addToBookListButton.addEventListener('keypress', function(e) {
    if (e.key == 'enter'){
        addBooktoMyLibrary();
        renderBooksInTable(userInput);
        clearInputs();
    }
})

//CONSTRUCTORS
function Book (title,author,pages,readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}

//FUNCTIONS
function addBooktoMyLibrary () {
    bookTitle = document.getElementById('bookTitle').value;
    bookAuthor = document.getElementById('bookAuthor').value;
    bookPages = document.getElementById('bookPages').value;
    readOrNot = document.getElementById('readOrNot').value;

    userInput = new Book (bookTitle,bookAuthor,bookPages,readOrNot);

    myLibrary.push(userInput)
}
function renderBooksInTable (userInput) {
    addTableRow = document.createElement('tr');
    addTableRow.setAttribute('data',);
    tableContents.appendChild(addTableRow)
    for (let property in userInput){
        let td = document.createElement('td')
        td.textContent = (`${userInput[property]}`)
        addTableRow.appendChild(td)

    }
    addDeleteButton();
    addDeleteListeners();
    
}
function addDeleteButton () {
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('id','deleteButton')
    deleteButton.textContent = 'DELETE'
    addTableRow.appendChild(deleteButton)
}
function addDeleteListeners () {
    let deleteButtonSelector =  document.querySelectorAll('#deleteButton');
    deleteButtonSelector.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(deleteButton.parentNode.rowIndex-1,1)
            console.log(myLibrary)
        })
    });
}
function clearInputs () {
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPages').value = "";
    document.getElementById('readOrNot').value = "";
}




