const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.listen(PORT,() => {
    console.log(`run on ${PORT}`);
});

app.use(express.json());
app.use(cors());

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🏀', name: 'Basketball' }
];

let leaderboard = [];

// GET /game -
app.get('/game', (request, response) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    response.json({ emoji: randomEmoji.emoji});
});

// POST /guess 
app.post('/guess', (request, response) => {
    const { playerName, emoji, guess } = request.body;
    const correctEmoji = emojis.find(e => e.emoji === emoji);
    if (!correctEmoji) {
        return res.status(400).json({ message: 'Invalid emoji' });
    }

    let isCorrect = guess === correctEmoji.name;
    let scoreChange = isCorrect ? 1 : 0;

    let player = leaderboard.find(p => p.name === playerName);
    if (!player) {
        player = { name: playerName, score: 0 };
        leaderboard.push(player);
    }
    player.score += scoreChange;

    res.json({ isCorrect, correctAnswer: correctEmoji.name});
});


