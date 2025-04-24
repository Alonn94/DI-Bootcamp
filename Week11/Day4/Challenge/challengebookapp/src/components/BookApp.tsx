import {useState} from 'react';
import {Book} from '../types';
import List from './List';

const BookApp: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([
        {id: '1', title: '1984', author: 'George Orwell'},
        {id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    ]);
    const addBook = () => {
        const newBook: Book = {
            id: (books.length + 1).toString(),
            title: 'New Book Title',
            author: 'New Book Author',
        };
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };
    return (
        <div>
            <h1>Book List</h1>
            <List
            items={books}
            renderItem={(book)=> (
                <>
                <p>{book.title} by {book.author}</p>
                </>
            )}
            />
            <button onClick={addBook}>Add Book</button>
        </div>
        
    );

};

export default BookApp;
