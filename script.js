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
        renderBooksInTable(myLibrary);
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
    
    if (bookTitle == '' || bookAuthor == '' || bookPages == '' || readOrNot =='') {
            alert('Invalid Entry. Please make sure all values are entered or selected')
            return
      }
    if (isNaN(bookPages)){
        alert('Invalid Entry. Please enter a number of pages')
        return
    }

    userInput = new Book (bookTitle,bookAuthor,bookPages,readOrNot);

    myLibrary.push(userInput)
}
function renderBooksInTable (myLibrary) {
    let myLibraryIndex = 0;
    tableContents.innerText= ''; 
    for (let index in myLibrary){
        addTableRow = document.createElement('tr');

        for (let property in myLibrary[index]){
            let td = document.createElement('td')
            if (property == 'readOrNot' ){
                addReadSelection(td,myLibrary,index,property);
            }else {
                td.textContent = (`${myLibrary[index][property]}`)
            }
            addTableRow.appendChild(td)
        }
        
        tableContents.appendChild(addTableRow)
        addDeleteButton(myLibraryIndex);
        myLibraryIndex++;
    }
}
function addReadSelection (td,myLibrary,index,property) {
    let readSelection = document.createElement('select');
    td.appendChild(readSelection);
    let readStatusArray = ['No','Yes','In-Progress']
        for (let i = 0; i< readStatusArray.length; i++){
            let option = document.createElement('option');
            option.value= readStatusArray[i];
            option.text = readStatusArray[i];
            readSelection.appendChild(option)
        }
    let userReadStatus = myLibrary[index][property];
        for(let i, h = 0; i = readSelection.options[h]; h++) {
            if (i.value == userReadStatus) {
                readSelection.selectedIndex = h;
                break;
            }
        }

}
function addDeleteButton (myLibraryIndex) {
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('data-index', myLibraryIndex);
    deleteButton.textContent = 'DELETE'
    addTableRow.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        myLibrary.splice(myLibraryIndex,1);
        renderBooksInTable(myLibrary);

    })
}
function clearInputs () {
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPages').value = "";
    document.getElementById('readOrNot').value = "";
}




