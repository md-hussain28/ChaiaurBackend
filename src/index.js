import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({ path: './.env' });


connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("Error from listeners",err);
        throw err
    })
    app.listen(process.env.PORT||8000,()=>{
      console.log(`Server is Running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed ERROR ->",err);
})



























/*
//A different way to connnect DATABASE
import express from "express"
const app=express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error from listeners",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listenening on port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Database connection error from src/index",error);
    }
})()
*/
