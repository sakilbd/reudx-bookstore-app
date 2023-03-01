import { combineReducers } from "redux";

import bookReducer from "./todos/reducer";

const rootReducer = combineReducers({
    books: bookReducer,
    
});

export default rootReducer;
