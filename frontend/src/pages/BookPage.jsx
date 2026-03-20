import { useEffect, useState } from "react"
import { useParams } from "react-router"
import api from "../lib/axios"
const BookPage = () => {
    const [book, setBook] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await api.get(`/book/${id}`)
                setBook(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchBook();
    }, [id])
    return (
        <>
        <p key={book._id}>{book.title}<br />{book.description}
        <br/>{book.isbn}<br/>{book.author}<br/>{book.edition}
        <br/>{book.category}</p>
        </>
    )
}
export default BookPage;