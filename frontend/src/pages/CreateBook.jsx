import { useState } from "react"
import { useNavigate } from "react-router"
const CreateBook = () => {
    const [isbn, setIsbn, title, setTitle, author, setAuthor, description, setDescription, edition, setEdition, category, setCategory] = useState("")
    const navigate = useNavigate()

    const handleSubimt = async (e) => {
        e.preventDefault();

        try {
            await api.post("/books", {
                isbn,
                title,
                author,
                description,
                edition,
                category
            })
            navigate("/")
        } catch (error) {
            console.log("Error creating book", error)
        }
    }
return (
    <>
    <p>Add a new book</p>
    <form onSubmit={handleSubimt}>
        <div>
            <label>test</label>
            <input type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            />
        </div>
        <button>Add book</button>
    </form>
    </>
)
}
export default CreateBook;