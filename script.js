let title = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")
let read = document.getElementById("read")
let submit = document.getElementById("submit")
let card = document.createElement("card");
let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

submit.addEventListener('click', (e) => {
    addbook()
    console.log(myLibrary)
    e.preventDefault();
    document.getElementById("form").reset();
})

function addbook(){
    const newBook = new Book(title.value, author.value, pages.value, read.checked)
    myLibrary.push(newBook)
    createCard(newBook)
}

function createCard(book){
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('button')
    const del = document.createElement('button')
    
    bookCard.classList.add('book-card')

    if (book.title != ""){
    title.textContent = `"${book.title}"`}
    author.textContent = book.author
    if (book.pages != ""){
    pages.textContent = `${book.pages} pages`}
    if(book.read == true){
        read.textContent = `Book read:Yes`
        book.read = false
        read.style.backgroundColor = "#22c55e"
    }
    else{
        read.textContent = `Book read:No`
        book.read = true
        read.style.backgroundColor = "red"
    }
    del.textContent = "Delete Book"

    read.addEventListener('click', () => {
        if(book.read == true){
            book.read = false
            read.textContent = `Book read:Yes`
            read.style.backgroundColor = "#22c55e"
        }
        else{
            book.read = true
            read.textContent = `Book read:No`
            read.style.backgroundColor = "red"
        }
        })

    del.addEventListener('click', () => {
        let index = myLibrary.findIndex((b) => b.id === book.id);
        myLibrary.splice(index, 1);
        cardbox.removeChild(bookCard);
    })

    cardbox.appendChild(bookCard)
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(read)
    bookCard.appendChild(del)
}
