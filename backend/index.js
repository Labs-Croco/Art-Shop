//packages
import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//Utilies
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Configuracion CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Permitir el envío de cookies
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server running on port: ${port}`))

