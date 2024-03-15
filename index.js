// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

const express = require("express");
const app = express();
app.listen(3000,() => console.log("Server listening at port 3000"));

app.get("/", (req, res) => {
    res.send("Hello World")
})