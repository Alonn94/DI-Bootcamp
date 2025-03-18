const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5002;

app.use(express.json());

app.listen(PORT,() => {
    console.log(`run on ${PORT}`);
});



app.get('/api/posts', async (request, response) => {
    try {
        const posts = await fetchPosts();
        console.log("Data successfully retrieved from JSONPlaceholder API");
        response.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
    }
});

