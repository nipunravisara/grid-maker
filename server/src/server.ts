import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes/grid';

dotenv.config();

const app = express();

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

app.use('/grids', router);
app.use('*', (req: express.Request, res: express.Response) =>
  res.status(404).json({ error: 'not found.' })
);

export default app;
