const express = require('express');
const app = express();
const port = 5003;

app.use(express.json());

app.listen(port,() => {
    console.log(`run on ${port}`);
});

const db = require('./configuration/db.js');


const books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedYear: 2001 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedYear: 2002 },
  ];

