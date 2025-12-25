import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logRoutes from './routes/logs.js';

const app = express();
dotenv.config(); // This loads your .env variables

app.use(express.json({ limit: '30mb', extended: true }));
app.use('/logs', logRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));