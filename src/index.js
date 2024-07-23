import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({ path: './.env' });


connectDB();



























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
