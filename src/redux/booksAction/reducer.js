import { BOOKEDIT, BOOKSEARCH } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKEDIT:
            return {
                ...state,
               book_edit:{
                // ...state.book_edit,
                status:action.payload.editStatus,
                id:action.payload.bookID
               }
            };

        case BOOKSEARCH:
          return {
            ...state,
            search_text:action.payload
          }
            

        default:
            return state;
    }
};

export default reducer;
