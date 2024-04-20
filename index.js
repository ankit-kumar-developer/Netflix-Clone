// steps for creating backend

// step-1
// const express = require('express')

import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utlis/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

databaseConnection()

dotenv.config({
    path: ".env"
})

const app = express();
// const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true       //access-control-allow-credentials:true
}

app.use(cors(corsOption))

// api
app.use("/api/v1/user", userRoute)

app.get('/', (req, resp) => {
    app.use(express.static(path.join(__dirname, "netflix", "build")))
    resp.sendFile(path.join(__dirname, "netflix", "build", 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`)
})




