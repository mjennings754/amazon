import { useEffect, useState } from "react"
import { useParams } from "react-router"
import api from "../lib/axios"
import BookDetail from "../components/BookDetail.jsx"
const BookPage = () => {
    const [book, setBook] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await api.get(`/books/${id}`)
                setBook(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchBook();
    }, [id])
    return (
        <>
        <BookDetail book={book} />
        </>
    )
}
export default BookPage;