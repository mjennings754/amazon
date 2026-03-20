import express from "express";
import booksRoutes from "./routes/booksRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(express.json())

app.use("/books", booksRoutes)

connectDB().then(() => {
    app.listen(5001, () => {
    console.log("Server is up and running!")
    });
});