import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import api from "../lib/axios"

const HomePage = () => {
    console.log("Homepage rendered")
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [loading, setLoading] = useState(true)
        const [books, setBooks] = useState([])

        useEffect(() => {
            const fetchBooks = async () => {
                try {
                    const res = await api.get("/books")
                    console.log(res.data)
                    setBooks(res.data)
                    setIsRateLimited(false)
                } catch (error) {
                    console.log("error fetching books")
                    console.log(error)
                    if (error.response?.status === 429){
                        setIsRateLimited(true)
                    } else {
                        console.error("Failed to load books")
                    }
                } finally {
                    setLoading(false)
            }
        }
            fetchBooks();
        }, []) 
    return (
        <>
        {isRateLimited}
        <p>Books</p>
        <Link to={"/new"}>Add book</Link>
            {loading && <div>Loading books...</div>}
            {books.length > 0 && !isRateLimited && (
                <>
            {books.map(book => {
                return <Link key={book._id} to={`/book/${book._id}`}><p>{book.title}</p></Link>
            })}
            </>
            )}
        </>
    )
}
export default HomePage;