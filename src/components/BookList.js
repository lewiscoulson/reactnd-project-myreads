import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class BookList extends Component {
  render() {
    const {books, handleChangeOption} = this.props;

    return (<ol className="books-grid">
      {books.map((book, index) => (<li key={index}>
        <Book
          id={book.id}
          title={book.title}
          image={book.imageLinks ? book.imageLinks.thumbnail : ''}
          authors={book.authors}
          shelf={book.shelf}
          onChangeOption={handleChangeOption}
        />
      </li>))}
    </ol>);
  }
}

BookList.propTypes = {
	books: PropTypes.array.isRequired,
	handleChangeOption: PropTypes.func.isRequired
};

export default BookList;