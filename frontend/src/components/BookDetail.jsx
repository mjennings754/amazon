function BookDetail({book}) {
    return (
        <>
        <div className="d-flex"><h2>{book.title}</h2>by {book.author}</div>
        <p>{book.isbn} | {book.edition}</p>
        <p>{book.description}</p>
        </>
    )
}
export default BookDetail;