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
    renderBooksInTable(myLibrary);
    clearInputs();
    
})
addToBookListButton.addEventListener('keypress', function(e) {
    if (e.key == 'enter'){
        addBooktoMyLibrary();
        renderBooksInTable(myLibrary,userInput);
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
function renderBooksInTable (myLibrary) {
    let myLibraryIndex = 0;
    tableContents.innerHTML= '' 
    for (let index in myLibrary){
        addTableRow = document.createElement('tr');
        for (let property in myLibrary[index]){
            let td = document.createElement('td')
            td.textContent = (`${myLibrary[index][property]}`)
            addTableRow.appendChild(td)
        }
        tableContents.appendChild(addTableRow)
        addDeleteButton(myLibraryIndex);
        myLibraryIndex++;
    }
}
function addDeleteButton (myLibraryIndex) {
    
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('data-index', myLibraryIndex);
    deleteButton.textContent = 'DELETE'
    addTableRow.appendChild(deleteButton)

    addDeleteListeners(myLibraryIndex);
}
function addDeleteListeners (index) {
    let deleteButtonSelector =  document.querySelectorAll('.deleteButton');
    deleteButtonSelector.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index,1);
            renderBooksInTable(myLibrary);

        })
    });

}
function clearInputs () {
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPages').value = "";
    document.getElementById('readOrNot').value = "";
}




