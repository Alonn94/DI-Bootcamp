const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`run on ${port}`);
});

const db = require('./configuration/db.js');

db.raw('SELECT NOW()')
  .then((res) => {
    console.log('Query result:', res.rows);
  })
  .catch((err) => {
    console.error('Error executing query:', err);
  });

const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);