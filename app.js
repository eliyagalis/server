import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

const app = express();

app.use(express.json());
app.use(cors(''));
config();

const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.CONNECTION_STRING;

app.use('/');

Mongoose.connect(MONGO_URI)
    .then(()=> { 
        app.listen(PORT, ()=> 
            console.log(`listening on port ${PORT}`))
    })
    .catch((error)=>console.log({message: "Mongoose connection error"},error));
