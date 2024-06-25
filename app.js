const express = require('express');
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const fs = require('fs');
const userRouter = require("./routes/user");

const {logReqRes} = require('./middlewares');

const app = express();
const PORT = 8000;


const url= "mongodb+srv://21pa1a12c0:sai292003@cluster0.acukifp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
.connect(url)
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error: ",err));

app.use(express.urlencoded({extended: false}));

app.use(express.json())

app.use(logReqRes('log.txt'));

app.use("api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));



