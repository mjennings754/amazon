import express from "express";
import booksRoutes from "./routes/booksRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();
app.use(express.json())

app.use("/books", booksRoutes)

app.listen(5001, () => {
    console.log("Server is up and running!")
})
