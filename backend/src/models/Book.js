import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    isbn: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    edition: {
        type:String,
        required:true
    }, 
}, {timestamps: true});

const Book = mongoose.model("Book", bookSchema)

export default Book