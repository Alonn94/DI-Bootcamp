import express from 'express';
import router from './routes/tasks.js';


const app = express();
const port = process.env.port || 4006;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`run on ${port}`);
  });



