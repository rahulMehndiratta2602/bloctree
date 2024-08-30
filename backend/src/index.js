import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import connectDB from './database/dbConnect.js';
import accrouter from './routes/account.route.js';
import getTransactions  from './controller/transactions.js';

// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to the database
connectDB();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// Middleware to parse JSON requests
app.use(express.json());

// Route handlers
app.use("/account", accrouter);
app.use("/signin", userRouter);
app.use("/signup", userRouter);
app.use("/avehi", userRouter);
app.use('/get-transactions', getTransactions);

app.use("/", userRouter);

// Default route
app.get('/', (req, res) => {
    res.json({
        "name": "dishant",
    });
});

// Start the server
app.listen(3001, () =>
    console.log('Example app listening on port 3001!'),
);
