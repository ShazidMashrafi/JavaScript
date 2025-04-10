// UI elements
let form = document.querySelector('#book-form');
let bookList = document.querySelector("#book-list");
let clearAllBtn = document.querySelector('#clear-all-btn');
// Classes
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static addToBookList(book) {
        let list = document.querySelector("#book-list")
        let row = document.createElement('tr');
        row.innerHTML = 
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>`;
        list.appendChild(row);
    }

    static deleteFromBookList(target) {
        if(target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            let isbn = target.parentElement.previousElementSibling.textContent.trim();
            LocalStorage.removeBook(isbn);
            UI.showAlert("Book Removed", 'success');
        }
    }
    
    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        container.insertBefore(div,form);
        setTimeout(() =>{
            document.querySelector('.alert').remove();
        },3000);
    }
}

class LocalStorage {
    static getBooks() {
        let books = [];
        if(localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = LocalStorage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = LocalStorage.getBooks();
        books.forEach(book => {
            UI.addToBookList(book);
        });
    }

    static removeBook(isbn) {
        let books = LocalStorage.getBooks();
        books.forEach((book,index) => {
            if(book.isbn === isbn) {
                books.splice(index,1);
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event listener
form.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);
clearAllBtn.addEventListener('click',clearAll);
document.addEventListener('DOMContentLoaded', LocalStorage.displayBooks());

// function
function newBook(e) {
    e.preventDefault();
    
    let title = document.querySelector("#title").value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill all the fields", "error");
    } else {
        let book = new Book(title,author,isbn);
        UI.addToBookList(book);
        LocalStorage.addBook(book);
        UI.showAlert("Book Added!","success");
        UI.clearFields();
    }
}

function removeBook(e) {
    e.preventDefault();
    UI.deleteFromBookList(e.target);
}

function clearAll() {
    if(confirm("Are you sure to clear all?")) {
        while(bookList.firstChild) {
            bookList.removeChild(bookList.firstChild);
        }
        localStorage.clear();
    }
}