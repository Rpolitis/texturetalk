import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/posts.js';

const app = express();

const corsOptions = {
    origin: "https://texturetalk.netlify.app/" // frontend URI (ReactJS)
}
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));

// Routes
app.use('/posts', postRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
