import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 
import logRoutes from './routes/logs.js';

const app = express();
dotenv.config(); 

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/logs', logRoutes);
app.get('/test', (req, res) => res.send('Server is alive!'));
app.get('/', (req, res) => res.send('Sync-Log API is running'));

// Database Connection Logic for Vercel
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => {
    // Only listen if not running on Vercel (local dev)
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
    }
  })
  .catch((error) => console.log(`${error.message} did not connect`));

export default app;