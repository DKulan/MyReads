import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class BookList extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map((book, key) => (
                                <Book
                                    handleChange={this.props.handleChange}
                                    book={book}
                                />
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookList