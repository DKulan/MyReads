import React from 'react'
import * as BooksAPI from '../utils/BooksAPI';
import '../App.css'
import PropTypes from 'prop-types';
import SearchPage from './SearchPage';
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import {Route, Link} from 'react-router-dom';

class BooksApp extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            });
    }

    handleChange(e, book) {
        BooksAPI.update(book, e.target.value);
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
                                <CurrentlyReading
                                    handleChange={this.handleChange}
                                    books={this.state.books}/>
                                <WantToRead
                                    handleChange={this.handleChange}
                                    books={this.state.books}/>
                                <Read
                                    handleChange={this.handleChange}
                                    books={this.state.books}/>
                            </div>
                        </div>
                        <Link
                            to='/search'
                            className='open-search'
                        >Add a book</Link>
                    </div>
                )}
                />
                <Route path='/search' component={SearchPage}/>
            </div>
        )
    }
}

export default BooksApp;
