import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import {connectDB} from './src/lib/db.js';

import authRoute from './src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js'

dotenv.config();
const app = express();

// Constants
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v0/auth", authRoute);
app.use("/api/v0/message", messageRoutes)

app.listen(PORT, () => {
  console.log('Server is running on PORT:', `https://localhost:${PORT}`);
  connectDB();
});

