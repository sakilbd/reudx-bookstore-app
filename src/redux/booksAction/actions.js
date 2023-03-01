import { BOOKEDIT, BOOKSEARCH } from "./actionTypes";

export const bookEdit = (editStatus, bookID) => {
    return {
        type: BOOKEDIT,
        payload: {
            editStatus,
            bookID,
        },
    };
};

export const bookSearch = (searchText) => {
    return {
        type: BOOKSEARCH,
        payload: searchText,
    };
};
