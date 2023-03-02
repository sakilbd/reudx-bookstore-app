import {
  ADDED,
 
  DELETED,
  LOADED,
  UPDATED,
 
} from "./actionTypes";
import initialState from "./initialState";



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [...state, action.payload];

    case DELETED:
      return state.filter((books) => books.id !== action.payload);

    case UPDATED:
      return state.map((book) => {
        if (book.id == action.payload.book_id) {
          return {...action.payload.book_updated_data};
        }

        return {
          ...book
        };
      });

    

    default:
      return state;
  }
};

export default reducer;
