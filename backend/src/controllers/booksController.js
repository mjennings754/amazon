export function getAllBooks(req, res) {
    res.status(200).send("You just fetched the books");
};

export function createBook(req, res) {
    res.status(201).send("Book created successfully")
};

export function updateBook(req, res) {
    res.status(200).json({mesage: "Book updated successfully"})
};

export function deleteBook(req, res) {
    res.status(200).json({message:  "Book deleted successfully"})
};