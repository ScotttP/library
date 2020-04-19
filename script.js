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
    bookTitle = document.getElementById('bookTitle').value
    bookAuthor = document.getElementById('bookAuthor').value
    bookPages = document.getElementById('bookPages').value
    readOrNot = document.getElementById('readOrNot').value
    renderBooksInTable();

})
addToBookListButton.addEventListener('keypress', function(e) {
    if (e.key == 'enter'){
        renderBooksInTable();
    }
})

const userInput = new Book (bookTitle,bookAuthor,bookPages,readOrNot)

//CONSTRUCTORS
function Book (title,author,pages,readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}
//PROTOTYPES
Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this.title,this.author,this.pages,this.readOrNot)
    
}
//FUNCTIONS
function renderBooksInTable () {
    addTableRow = document.createElement('tr')
    tBody.appendChild(addTableRow)
    for (let i = 0; i <= myLibrary.length; i++){
        let addTableRowContents = document.createElement('td')
        addTableRowContents.textContent = myLibrary[i]
        addTableRow.appendChild(addTableRowContents)
    
    }
    let tableRowIndex = addTableRow.rowIndex
    addDeleteButton();
    addDeleteListeners(tableRowIndex);
}
function addDeleteButton () {
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = 'DELETE'
    addTableRow.appendChild(deleteButton)
    
}

function addDeleteListeners (tableRowIndex) {
   let deleteButtonSelector =  document.querySelectorAll('.deleteButton');
    deleteButtonSelector.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
           console.log('need to delete this current row')
        })
    });
}



//CALLS
userInput.addBookToLibrary()


