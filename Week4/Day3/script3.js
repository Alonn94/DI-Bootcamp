let allBooks = [
    {
        title: "The Fear in Their House",
        author: "John Marks",
        image: "",
        alreadyRead: false
    },
    {
        title: "The Value of Others",
        author: "Orion Taraban",
        image: "",
        alreadyRead: true
    }
];

let bookSelection = document.querySelector(listBooks);


allBooks.forEach(book =>{
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookDetails.style.color= "red";
    }
// xxxxxxx


})