import React from 'react';
import ShelfChanger from './ShelfChanger';


function CurrentlyReading(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map(book => (
                            book.shelf === "currentlyReading" && (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                }}>
                                            </div>
                                            <ShelfChanger handleChange={e => {
                                                props.handleChange(e, book)
                                            }}/>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        {
                                            book.authors.map(author => (
                                                <div className="book-authors">{`${author}`}</div>
                                            ))
                                        }
                                    </div>
                                </li>
                            )
                        ))
                    }
                </ol>
            </div>
        </div>
    )
};

export default CurrentlyReading;