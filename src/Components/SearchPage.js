import React from 'react';
import {Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI';
import Book from "./Book";


class SearchPage extends React.Component {
    static propTypes = {
        handleChange: PropTypes.func.isRequired
    };

    state = {
        searchedBooks: []
    };

    searchForBook = (e) => {
        BooksAPI.search(e.trim())
            .then((books) => {
                if (e.trim() === "") {
                    this.setState(() => ({
                        searchedBooks: []
                    }));
                } else if (!books.error && e.trim() !== "") {
                    this.setState(() => ({
                        searchedBooks: books
                    }))
                }
            })
    };

    render() {
        return (
            <Route exact path='/search' render={() => (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link
                            to='/'
                            className="close-search"
                        />
                        <div className="search-books-input-wrapper">
                            {

                            }
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(e) => {
                                    this.searchForBook(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                this.state.searchedBooks.map(book => (
                                    <Book
                                        handleChange={this.props.handleChange}
                                        book={book}
                                    />
                                ))
                            }
                        </ol>
                    </div>
                </div>
            )}/>
        )
    }
}

export default SearchPage