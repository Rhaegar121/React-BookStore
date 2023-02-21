const Book = ({title, author}) => {
    return (
        <div>
            <span>{title}</span>
            <span>{author}</span>
            <button>Remove</button>
        </div>
    )
}

export default Book;