import express from "express";
import booksRoutes from "./routes/booksRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { getBookById } from "./controllers/booksController.js";
dotenv.config();

const app = express();


app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json())

app.use("/api/books", booksRoutes)

app.get('/book/:id', getBookById)

connectDB().then(() => {
    app.listen(5001, () => {
    console.log("Server is up and running!")
    });
});