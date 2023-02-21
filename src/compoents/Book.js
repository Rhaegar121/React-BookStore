import Form from "./Form";

const Book = ({title, author}) => {
    return (
        <>
        <div>
            <span>{title}</span>
            <span>{author}</span>
            <button>Remove</button>
        </div>
        <Form />
        </>
    )
}

export default Book;