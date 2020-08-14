//Book Class: Represents a Book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const storedBooks = Store.getBooks();

    const books = storedBooks;

    books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML =  `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        //Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }

    static deleteBooks(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}

//Storage Class: Handles local storage
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBooks(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBooks(isbn){
        const books = Store.getBooks();

        books.forEach((book,index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }


}





//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
    e.preventDefault();

    // Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    

    //validate
    if (title === '' || author === '' || isbn === '')
    {
        UI.showAlert("Please fill in all the fields", 'danger')
    } 
    else 
    {
     
     //Instantiate book
     const book = new Book(title,author,isbn);
    

     // add book to UI
     UI.addBookToList(book);

    // add book to store
    Store.addBooks(book);

     // success alert 
     UI.showAlert("Book Added", 'success');
     
     // reset the form
     document.querySelector('#book-form').reset();
    }

})

//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', e => {

    // delete book from UI
    UI.deleteBooks(e.target);

    //delete book from store
    Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
    
    UI.showAlert("Book Removed", 'success');
})