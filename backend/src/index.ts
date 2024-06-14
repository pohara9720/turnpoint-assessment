import { Request, Response } from 'express';
import sequelize from './models';
import clientRouter from './routes/client';
const express = require('express');
const cors = require('cors');

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/clients', clientRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is connected to the database');
});

// Only start the server if not running in test mode
if (process.env.NODE_ENV !== 'test') {
  sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
}
