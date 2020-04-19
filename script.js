let myLibrary = [];

let bookTitle = document.getElementById('bookTitle').value
let bookAuthor = document.getElementById('bookAuthor').value
let bookPages = document.getElementById('bookPages').value
let readOrNot = document.getElementById('readOrNot').value

//QUERY SELECTORS
let tableContents = document.querySelector('#tableContents');
let addToBookListButton = document.querySelector('#addToBookListButton');

//EVENT LISTENERS
addToBookListButton.addEventListener('click', () => {
    render();
})

const userInput = new Book (bookTitle,bookAuthor,bookPages,readOrNot)


function Book (title,author,pages,readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this.title,this.author,this.pages,this.readOrNot)
    
}

function render () {
    let addTableRow = document.createElement('tr')
    tableContents.appendChild(addTableRow)
    for (let i = 0; i <= myLibrary.length; i++){
        let addTableRowContents = document.createElement('td')
        addTableRowContents.textContent = myLibrary[i]
        addTableRow.appendChild(addTableRowContents)
    }
    
}

//CALLS
userInput.addBookToLibrary()


