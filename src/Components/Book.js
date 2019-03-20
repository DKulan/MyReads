import React from 'react';
import PropTypes from 'prop-types';
import NoCover from '../assets/no_cover.jpg';


class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired
    };

    render() {

        const {book, handleChange} = this.props;

        let bookCover = NoCover;

        if (book.imageLinks) {
            bookCover = book.imageLinks.thumbnail;
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${bookCover})`
                            }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select onChange={e => {
                                handleChange(book, e.target.value)
                            }}
                                value={book.shelf}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book