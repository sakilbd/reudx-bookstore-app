import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    LOADED,
    TOGGLED,
    UPDATED,
} from "./actionTypes";

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books,
    };
};

export const added = (book) => {
  
    return {
        type: ADDED,
        payload: book,
    };
};

export const updated = (bookId,bookUpdatedData) => {
    return {
        type: UPDATED,
        payload: {
            book_id:bookId,
            book_updated_data:bookUpdatedData
        },
    };
};



export const deleted = (bookId) => {
    return {
        type: DELETED,
        payload: bookId,
    };
};


