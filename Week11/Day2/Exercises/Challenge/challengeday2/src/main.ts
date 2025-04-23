
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

interface BookLibrary {
  addBook(book: Book): void;
  getBookDetails(isbn: string): string;
}

class Library implements BookLibrary {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookDetails(isbn: string): string {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      return `${book.title} by ${book.author}, published in ${
        book.publishedYear
      }. Genre: ${book.genre || "Not specified"}  `;
    }
    return "Book not found";
  }
  getBooks(): Book[] {
    return [...this.books];
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  listBooks(): string[] {
    return this.getBooks().map((book) => book.title);
  }
}