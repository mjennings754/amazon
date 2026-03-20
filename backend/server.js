import express from "express";

const app = express()
app.get("/books", (req, res) => {
    res.send("You got 29118 books")
})

app.listen(5001, () => {
    console.log("Server is up and running!")
})
