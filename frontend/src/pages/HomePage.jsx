import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import api from "../lib/axios"

const HomePage = () => {
    console.log("Homepage rendered")
        const [books, setBooks] = useState([])

        useEffect(() => {
            const fetchBooks = async () => {
                try {
                    const res = await api.get("/books")
                    console.log(res.data)
                    setBooks(res.data)
                } catch (error) {
                    console.log("error fetching books")
                    console.log(error)
                }
            }
            fetchBooks();
        }, []) 
    return (
        <>
        <p>Books</p>
        <Link to={"/new"}>Add book</Link>
        <div>
            {books.map(book => {
                return <Link key={book._id} to={`/book/${book._id}`}><p>{book.title}</p></Link>
            })}
        </div>
        </>
    )
}
export default HomePage;