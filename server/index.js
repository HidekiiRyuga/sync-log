import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; // This is what was missing!

import logRoutes from './routes/logs.js';

const app = express();
dotenv.config(); // This loads your .env variables

app.use(express.json({ limit: '30mb', extended: true }));
app.use('/logs', logRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));