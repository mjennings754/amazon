import Book from "../models/Book.js"

export async function getAllBooks(req, res) {
    try {
        const books = await Book.find();
        res.status(200).json(books)
    } catch (error) {
        console.error("Error in all getAllBooks controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        if(!book) return res.status(404).json({message: "Book not found!"})
            res.json(note)
    } catch (error) {
        console.error("Error in getBookById controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createBook(req, res) {
    try {
        const {isbn, title, author, description, edition, category} = req.body
        const book = new Book({isbn:isbn, title:title, author:author, description:description, edition:edition, category:category})

        const savedBook = await book.save()
        console.log(book)
    } catch (error) {
        console.error("Error in createBook controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function updateBook(req, res) {
    try {
        const {isbn, title, author, description, edition, category} = req.body
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {isbn, title, author, description, edition, category}, {new: true});
        if(!updatedBook) return res.status(404).json({message:"Book not found"})
            res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error in updateBook controller", error)
        res.status(500).json({message: "Internal server error"})       
    }
}

export async function deleteBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if (!deletedBook) return res.status(404).json({message: "Book not found"});
        res.status(200).json({message: "Book deleted successfully"})
    } catch (error) {
        console.error("Error in deleteBook controller", error)
        res.status(500).json({message: "Internal server error"})        
    }
};