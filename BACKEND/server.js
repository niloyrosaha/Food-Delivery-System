import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();
const app = express();

app.get("/", (req,res)=>{
    res.send("server is ready 123")
})
console.log(process.env.MONGO_URI);
app.listen(5000, ()=> {
    connectDB();
    console.log("server starting at http://localhost:5000");
} );
