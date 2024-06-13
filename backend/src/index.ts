import express from 'express';
import sequelize from './models';
import clientRouter from './routes/client';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/clients', clientRouter);

app.get('/', (_, res) => {
  res.send('Server is connected to the database');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
