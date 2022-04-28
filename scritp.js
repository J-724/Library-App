
function Book(title, author, pages, category, readed){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.category = category;
    this.readed = readed;
}

Book.prototype.showInfo = function() {
    // Set visible the info div
}

Book.prototype.deleteBook = function() {
    // Delete book
}

Book.prototype.changeReadedStatus = function () {
    // toggle readed
}

function addBook(e) {
    console.log('add book');
}

const addbtn = document.getElementsByClassName("add-buttom");
addbtn.addEventListener('click', addBook);





