import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelf from '../components/BookShelf';
import BookList from '../components/BookList';

class BooksPage extends Component {
	render() {
		const {getCurrentlyReadingBooks, getWantToReadBooks, getReadBooks, handleChangeOption} = this.props;

		return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        	<BookShelf title="Currently Reading">
        		<BookList
                books={getCurrentlyReadingBooks()}
                handleChangeOption={handleChangeOption} />
        	</BookShelf>

        	<BookShelf title="Want to Read">
        		<BookList
                books={getWantToReadBooks()}
                handleChangeOption={handleChangeOption} />
        	</BookShelf>

        	<BookShelf title="Read">
        		<BookList
                books={getReadBooks()}
                handleChangeOption={handleChangeOption} />
        	</BookShelf>
        </div>
      </div>
      <div className="open-search">
      	<Link to="/search">Add a book</Link>
      </div>
  	</div>);
	}
}

BooksPage.propTypes = {
	getCurrentlyReadingBooks: PropTypes.func.isRequired,
	getWantToReadBooks: PropTypes.func.isRequired,
	getReadBooks: PropTypes.func.isRequired,
	handleChangeOption: PropTypes.func.isRequired
};

export default BooksPage;