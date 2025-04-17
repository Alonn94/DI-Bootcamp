import {useSelector,useDispatch} from 'react-redux';
import { setSelectedGenre } from './booksSlice';
import { selectBooksBySelectedGenre, selectSelectedGenre } from './selectors';


const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector (selectBooksBySelectedGenre);
    const selectedGenre = useSelector (selectSelectedGenre);

    const genres = ["All", "Horror", "Fantasy", "Science Fiction"];

    const handleGenreChange = (genre) => {
        dispatch(setSelectedGenre(genre));
    };

    return (
        <div>
            <div className="genre-selector">
                <h2>Filter by Genre</h2>
                <div className="genre-buttons">
                    {genres.map((genre) => (
                        <button
                        key = {genre}
                        onClick = {() => handleGenreChange(genre)}
                        className={selectedGenre === genre ? 'active' : ''}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>
            <div className="book-list">
                <h2>{selectedGenre === 'All' ? 'All Books' : `${selectedGenre} Books`}</h2>
                {books.length > 0 ? (
                    <ul>
                        {books.map(book => (
                            <li key={book.id} className= "book-item">
                                <h3>{book.title}</h3>
                                <p>Author: {book.author}</p>
                                <p>Genre: {book.genre}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No books available in this genre.</p>
                )}
            </div>
        </div>
    )
}

export default BookList;

