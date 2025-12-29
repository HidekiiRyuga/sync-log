import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 

import logRoutes from './routes/logs.js';

const app = express();
dotenv.config(); 

// 1. Middleware (Order is important!)
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// 2. Routes
app.use('/logs', logRoutes);
app.get('/test', (req, res) => res.send('Server is alive!'));

// 3. Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error.message} did not connect`));

export default app;