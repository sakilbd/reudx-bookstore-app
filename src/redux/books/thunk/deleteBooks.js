import { deleted } from "../actions";

const deleteBooks = (bookId) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "DELETE",
        });

        dispatch(deleted(bookId));
    };
};

export default deleteBooks;
