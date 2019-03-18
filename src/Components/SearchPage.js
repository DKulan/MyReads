import React from 'react';
import {Route, Link} from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Book from "./Book";

/*

NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.

*/

class SearchPage extends React.Component {
    state = {
        searchedBooks: []
    };


    searchForBook(e) {
        BooksAPI.search(e)
            .then((books) => {
                this.setState(() => ({
                    searchedBooks: books
                }));
            });

    }

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
        );
    }
};

export default SearchPage;