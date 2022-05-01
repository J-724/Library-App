
const mainArea = document.querySelector(".books-area")
const addbtn = document.querySelector(".add-buttom");
addbtn.addEventListener('click', createFormV3);

function createFormV3(){
    console.log("V3 deployed");
    addbtn.removeEventListener('click', createFormV3);

    var documentFragment = document.createRange().createContextualFragment(`
        <div class="form-newBook">
            <form action="">
                <div class="form-options">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title">
                </div>
                <div class="form-options">    
                    <label for="author">Author</label>
                    <input type="text" name="author" id="author">
                </div>
                <div class="form-options">    
                    <label for="pages">Pages</label>
                    <input type="text" name="pages" id="pages">
                </div>    
                <div class="form-options">    
                    <label for="category">Category</label>
                    <input type="text" name="category" id="category">
                </div>
                <div class="form-options lastline">    
                    <label for="readed">readed</label>
                    <input class="apple-switch" type="checkbox" name="readed" id="readed">
                </div>
            </form>
            <button class="addButton" type="submit">Add Book</button>
        </div>               
    `)
    mainArea.prepend(documentFragment);

    const button = mainArea.querySelector(".addButton");
    button.addEventListener("click", createBook);
}

function createBook(e){
    const form = mainArea.querySelector(".form-newBook");
    const title = form.querySelector("#title").value;
    const author = form.querySelector("#author").value;
    const pages = form.querySelector("#pages").value;
    const category = form.querySelector("#category").value;

    e.target.parentElement.remove();
    addbtn.addEventListener('click', createFormV3);

    var documentFragment = document.createRange().createContextualFragment(`
        <div class="book-display item">
            <div class="book-img">
                <img src="img/The Raven.jpg" alt="Book Cover">
            </div>
            <div class="book-info">
                <ul>
                </ul>
            </div>
            <div class="book-delete">X</div>
        </div>            
    `)
    mainArea.prepend(documentFragment);

    const bookDisplay = mainArea.querySelector(".book-display");
    const delbtn = bookDisplay.querySelector(".book-delete");
    const ul = bookDisplay.querySelector("ul");
    const br = document.createElement("br");
    const li = document.createElement("li");
    
    ul.append(li.cloneNode().textContent= `Title: ${title}`);
    ul.append(br.cloneNode());
    ul.append(li.cloneNode().textContent= `Author: ${author}`);
    ul.append(br.cloneNode());
    ul.append(li.cloneNode().textContent= `Pages: ${pages}`);
    ul.append(br.cloneNode());
    ul.append(li.cloneNode().textContent= `category: ${category}`);

    delbtn.addEventListener("click", (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
        console.log("Book removed");
    });
}



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

//Creating DOM elements





// formLabel.setAttribute("for", "  ");

// formInput.setAttribute("type", "");
// formInput.setAttribute("name", "");
// formInput.setAttribute("id",  "");



    // // // Create an input element for password
    // var PWD = document.createElement("input");
    // PWD.setAttribute("type", "password");
    // PWD.setAttribute("name", "password");
    // PWD.setAttribute("placeholder", "Password");




    // // Creating form - example
    // const para = document.createElement("p");
    // para.innerHTML = "This is a paragraph.";
    // document.getElementById("myDIV").appendChild(para);


    // // Another Example - MDN
    // document.body.onload = addElement;

    // function addElement () {
    // // create a new div element
    // const newDiv = document.createElement("div");

    // // and give it some content
    // const newContent = document.createTextNode("Hi there and greetings!");

    // // add the text node to the newly created div
    // newDiv.appendChild(newContent);

    // // add the newly created element and its content into the DOM
    // const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
    // }
