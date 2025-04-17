import {createSlice} from '@reduxjs/toolkit';


const initialState = {

    books: [
        { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
        { id: 2, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
        { id: 3, title: 'It', author: 'Stephen King', genre: 'Horror' },
        { id: 4, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
        { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 6, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' }

    ],
    selectedGenre: "All",
};


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
        }
    }
})

export const {setSelectedGenre} = booksSlice.actions;
export default booksSlice.reducer;

