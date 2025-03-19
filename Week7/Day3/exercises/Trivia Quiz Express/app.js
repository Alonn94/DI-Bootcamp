const express = require('express');
const app = express();
const quizRouter = express.Router();
const port = 3000;

app.use(express.json());

app.listen(port,() => {
    console.log(`run on ${port}`);
});

const triviaQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let userProgress = {};

quizRouter.post('/', (request,response) => {
    const user = userProgress[request.ip];
    if (user.currentQuestion >= triviaQuestions.length) {
        return response.json ({message:"Quiz completed!", score:user.score });
    }
    response.json({question: triviaQuestions[user.currentQuestion].question});
});

quizRouter.post('/',(request,repsonse) => {
    const user = userProgress[request.ip];
    if (user.currentQuestion >= triviaQuestions.length) {
        return response.json({message:"Quiz completed!", score:user.score});
    }

    res.json({ question: triviaQuestions[user.currentQuestion].question });
});

quizRouter.post('/', (req, res) => {
  const user = userProgress[req.ip];
  if (user.currentQuestion >= triviaQuestions.length) {
    return res.json({ message: "Quiz completed!", score: user.score });
  }
  
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[user.currentQuestion].answer;
  let feedback;
  
  if (userAnswer && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    user.score++;
    feedback = "Correct!";
  } else {
    feedback = `Incorrect! Right answer: ${correctAnswer}.`;
  }

  user.currentQuestion++;
  
  if (user.currentQuestion < triviaQuestions.length) {
    res.json({ feedback, nextQuestion: triviaQuestions[user.currentQuestion].question });
  } else {
    res.json({ feedback, message: "Quiz completed!", finalScore: user.score });
  }

});

quizRouter.get('/score', (req, res) => {
    const user = userProgress[req.ip];
    res.json({ score: user.score, message: "Quiz completed!" });
  });
  
  app.use('/quiz', quizRouter);