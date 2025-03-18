const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.json());

app.listen(PORT,() => {
    console.log(`run on ${PORT}`);
});



let books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", publishedYear: 1997 },
    { id: 2, title: "Les miserables", author: "Victor Hugo", publishedYear: 1962 }
];

app.get('/api/books', (request, response) => {
    response.json(books);
});


app.get('/api/books/:id', (request, response) => {
    const { id } = request.params;
    const book = books.find(b => b.id == id);
    if (!book) {
        return response.json({ message: "Book not found" });
    }
    response.json(book);
});

app.post('/api/books',(request, response) => {
    const {title, author,publishedYear} = request.body

    const newBook = {title, author,publishedYear, id:users.length + 1};
    books.push(newBook);
    response.status(201).json(newBook);

});


