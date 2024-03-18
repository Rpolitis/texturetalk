// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// const express = require("express");
// const app = express();
// app.listen(3000,() => console.log("Server listening at port 3000"));

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// server.js

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// const express = require('express');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
import authRoutes from './routes/authRoutes.js'

// import the router which we exported from posts.js
import postRoutes from './routes/posts.js';
import userRouter from './routes/authRoutes.js';

const app = express();

// use express middleware to connect this to our application
// every route inside of postRoutes is going to start with /posts
app.use('/posts', postRoutes)
app.use('/user', userRouter);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Middleware
app.use(express.json());

const CONNECTION_URL = 'mongodb+srv://dsun:dsun123@cluster0.s5zv6nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT = process.env.PORT || 5000;

// use mongoose to connect to our database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Use auth routes
app.use('/api/auth', authRoutes);

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
