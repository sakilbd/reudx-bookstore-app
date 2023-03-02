import { updated } from "../actions";

const updateBook = (bookID, currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookID}`, {
            method: "PATCH",
            body: JSON.stringify(currentStatus),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const book = await response.json();
        console.group("update Book thunk");
        console.log(book)
        // dispatch(updated(todo.id));
        dispatch(updated(bookID,currentStatus));
    };
};

export default updateBook;
