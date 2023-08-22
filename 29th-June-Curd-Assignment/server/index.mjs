import express from 'express';
import cors from 'cors';
import { config as configDotenv } from 'dotenv';
// import { connectToDb } from './config/db.js';
import pkg from './config/db.js';
const { connectToDb } = pkg;
import router from './routes/routes.js'



// Load environment variables from .env file
configDotenv();

// Create an Express app
const app = express();
app.use(express.json());

// Configure CORS to allow connections from http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB
connectToDb();

// Attach the router to handle routes
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});