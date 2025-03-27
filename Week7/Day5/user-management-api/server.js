import express from 'express';
import router from './routes/users.js';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve()

const port = process.env.port || 4007;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`run on ${port}`);
  });


