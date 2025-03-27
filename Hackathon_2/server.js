import express from 'express';
import router from './routes/UserDashboard.js';
import path from 'path';
import cors from 'cors';

const __dirname = path.resolve()

const app = express();
const port = process.env.port || 4010;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`run on ${port}`);
  });




