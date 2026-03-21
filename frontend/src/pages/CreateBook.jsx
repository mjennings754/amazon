import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../lib/axios"
const CreateBook = () => {
    const [isbn, setIsbn] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [edition, setEdition] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked")
        try {
            const response = await api.post("/books", {
                isbn,
                title,
                author,
                description,
                edition,
                category,
                price
            })
            console.log(response.data)
            navigate("/")
        } catch (error) {
            console.log("Error creating book", error.response)
        }
    }
return (
    <>
    <Link to={"/"}>Back to homepage</Link>
    <p>Add a new book</p>
    <form onSubmit={handleSubmit}>
        <div>
            <label>ISBN</label>
            <input type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            />
        </div>
        <div>
            <label>Title</label>
            <input type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label>Author</label>
            <input type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
        <div>
            <label>Description</label>
            <input type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div>
            <label>Edition</label>
            <input type="text"
            placeholder="Edition"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            />
        </div>
        <div>
            <label>Category</label>
            <input type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
        </div>
        <div>
            <label>Price</label>
            <input type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <button type="submit">Add book</button>
    </form>
    </>
)
}
export default CreateBook;