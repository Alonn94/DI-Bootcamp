import {createSelector} from '@reduxjs/toolkit'


//basic selector to get the book state
export const selectBooksState = (state) => state.books;

//basic selector to get all the books
export const selectBooks = createSelector ([selectBooksState], (bookState) => bookState.books);

//selector to get the selected genre 
export const selectSelectedGenre = createSelector ([selectBooksState], (bookState) => bookState.selectedGenre);

//selector for specific genre
export const selectHorrorBooks = createSelector ([selectBooks], (books) => books.filter((book) => book.genre === "Horror"));

export const selectFantasyBooks = createSelector ([selectBooks], (books) => books.filter((book) => book.genre === "Fantasy"));

export const selectScienceFictionBooks = createSelector ([selectBooks], (books) => books.filter((book) => book.genre === "Science Fiction"));




export const selectBooksBySelectedGenre = createSelector(
    [selectBooks, selectSelectedGenre],
    (books, selectedGenre) => {
      if (selectedGenre === 'All') {
        return books;
      }
      return books.filter(book => book.genre === selectedGenre);
    }
  );


  