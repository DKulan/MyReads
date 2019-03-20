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
        searchedBooks: [],
        query: ""
    };

    searchForBook = (e) => {
        this.setState({ query: e.trim() });

        BooksAPI.search(e.trim())
            .then((books) => {
                if (e.trim() === "" || books.error) {
                    this.setState(() => ({
                        searchedBooks: []
                    }));
                } else if (e.trim() !== "" && this.state.query === e) {
                    this.setState(() => ({
                        searchedBooks: this.shelfChecker(books)
                    }));
                }
            })
    };

    shelfChecker = (results) => {
        const {books} = this.props;

        const check = results.filter(result => books.find(b => {
            if (b.id === result.id) {
                result.shelf = b.shelf;
                return result;
            } else {
                result.shelf = "none";
            }
        }));

        books.concat(check);
        return results;
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
                                this.state.searchedBooks.map(book => {
                                    return (
                                        < Book
                                            handleChange={this.props.handleChange}
                                            book={book}
                                        />
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            )}/>
        )
    }
}

export default SearchPage