import React from 'react';
import Book from './Book';


function BookList(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map(book => (
                            <Book
                                handleChange={props.handleChange}
                                book={book}
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookList