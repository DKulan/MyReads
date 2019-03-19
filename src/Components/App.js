import React from 'react'
import * as BooksAPI from '../utils/BooksAPI';
import '../App.css'
import BookList from './BookList';
import SearchPage from './SearchPage';

import {Route, Link} from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            });
    }

    handleChange = (book, e) => {
        BooksAPI.update(book, e)
            .then(() => {
                this.getBooks()
            })
    };

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <BookList
                                    handleChange={this.handleChange}
                                    title="Currently Reading"
                                    books={this.state.books.filter(book => book.shelf === "currentlyReading")}/>
                                <BookList
                                    handleChange={this.handleChange}
                                    title="Want to Read"
                                    books={this.state.books.filter(book => book.shelf === "wantToRead")}/>
                                <BookList
                                    handleChange={this.handleChange}
                                    title="Read"
                                    books={this.state.books.filter(book => book.shelf === "read")}/>
                            </div>
                        </div>
                        <Link
                            to='/search'
                            className='open-search'
                        >Add a book</Link>
                    </div>
                )}
                />
                <Route path='/search' render={() => (
                    <SearchPage
                        handleChange={this.handleChange}
                    />
                )}
                />
            </div>
        )
    }
}

export default BooksApp
