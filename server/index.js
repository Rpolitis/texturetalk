import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// import the router which we exported from posts.js
import postRoutes from './routes/posts.js';

const app = express();

// use express middleware to connect this to our application
// every route inside of postRoutes is going to start with /posts
app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://dsun:dsun123@cluster0.s5zv6nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT = process.env.PORT || 5000;

// use mongoose to connect to our database
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));