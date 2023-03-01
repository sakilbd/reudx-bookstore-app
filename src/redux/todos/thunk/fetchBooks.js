import { loaded } from "../actions";

const fetchBooks = async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();
    // console.log(books);
    dispatch(loaded(books));
};

export default fetchBooks;



