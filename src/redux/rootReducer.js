import { combineReducers } from "redux";

import bookReducer from "./books/reducer";

const rootReducer = combineReducers({
    books: bookReducer,
    
});

export default rootReducer;
