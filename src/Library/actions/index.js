
export const bookActions = {
    selectBook: (book) => {
        return {
            type: 'BOOK_SELECT',
            payload: book,
        }
    }
};