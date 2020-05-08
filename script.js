let myLibrary = [];
let addTableRow;

//QUERY SELECTORS
const tableContents = document.querySelector('#tBody');
const addToBookListButton = document.querySelector('#addToBookListButton');

//EVENT LISTENERS
addToBookListButton.addEventListener('click', () => {
    let userInput = new Book (bookTitle.value,bookAuthor.value,bookPages.value,readOrNot.value);
    userInput.addBooktoMyLibrary(userInput);
    userInput.renderBooksInTable(myLibrary);
    userInput.clearInputs();
    
})
addToBookListButton.addEventListener('keypress', function(e) {
    if (e.key == 'enter'){
        userInput.addBooktoMyLibrary(userInput);
        userInput.renderBooksInTable(myLibrary);
        userInput.clearInputs();
    }
})


//CLASSES
class Book {
    constructor (bookTitle,bookAuthor,bookPages,readOrNot){
        this.bookTitle = bookTitle
        this.bookAuthor = bookAuthor
        this.bookPages = bookPages
        this.readOrNot = readOrNot
    }
    
    addBooktoMyLibrary (userInput) {
        let bookTitle = document.getElementById('bookTitle').value;
        let bookAuthor = document.getElementById('bookAuthor').value;
        let bookPages = document.getElementById('bookPages').value;
        let readOrNot = document.getElementById('readOrNot').value;
        
        if (bookTitle == '' || bookAuthor == '' || bookPages == '' || readOrNot =='') {
                alert('Invalid Entry. Please make sure all values are entered or selected')
                return
        }
        if (isNaN(bookPages)){
            alert('Invalid Entry. Please enter a number of pages')
            return
        }
        console.log()
        myLibrary.push(userInput)
    }
    renderBooksInTable (myLibrary) {
        let myLibraryIndex = 0;
        tableContents.innerText= ''; 
        for (let index in myLibrary){
            addTableRow = document.createElement('tr');

            for (let property in myLibrary[index]){
                let td = document.createElement('td')
                if (property == 'readOrNot' ){
                    this.addReadSelection(td,myLibrary,index,property);
                }else {
                    td.textContent = (`${myLibrary[index][property]}`)
                }
                addTableRow.appendChild(td)
            }
            
            tableContents.appendChild(addTableRow)
            this.addDeleteButton(myLibraryIndex);
            myLibraryIndex++;
        }
    }
    addReadSelection (td,myLibrary,index,property) {
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
    addDeleteButton (myLibraryIndex) {
        let deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.setAttribute('data-index', myLibraryIndex);
        deleteButton.textContent = 'DELETE'
        addTableRow.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {
            myLibrary.splice(myLibraryIndex,1);
            this.renderBooksInTable(myLibrary);

        })
    }
    clearInputs () {
        document.getElementById('bookTitle').value = "";
        document.getElementById('bookAuthor').value = "";
        document.getElementById('bookPages').value = "";
        document.getElementById('readOrNot').value = "";
    }

}


