import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("LOG :", process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected !! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error",error);
    process.exit(1);
  }
};

export default connectDB;
