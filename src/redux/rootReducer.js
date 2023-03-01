import { combineReducers } from "redux";

import bookReducer from "./books/reducer";
import booksActionReduce from "./booksAction/reducer"

const rootReducer = combineReducers({
    books: bookReducer,
    booksAction:booksActionReduce
    
});

export default rootReducer;
