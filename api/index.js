import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION)
.then(() =>{
    console.log("Connected to Mongo");
})
.catch(err =>{
    console.log("Error connecting to Mongo")
})

const app = express();

app.listen(process.env.PORT,()=>{
    console.log("Connected to port " + process.env.PORT);
} )

app.use("/api/user", userRoutes);

