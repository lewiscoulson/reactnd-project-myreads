import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

import BookList from '../components/BookList';

class SearchPage extends Component {
	state = {
		matchingBooks: []
	}

	searchBooks = (event) => {
		let val = event.target.value;

		BooksAPI.search(val, 20).then((response) => {
			let matchingBooks = response.map((book) => {
				let match = this.props.books.filter((b) => b.id === book.id);

				if (match.length) {
					book['shelf'] = match[0].shelf;
				}

				return book;
			});

			this.setState({matchingBooks})
		});
	};

	render() {
		const {handleChangeOption} = this.props;
		const {matchingBooks} = this.state;

		return (<div className="search-books">
	      <div className="search-books-bar">
	        <Link className="close-search" to="/">Close</Link>
	        <div className="search-books-input-wrapper">
	          <input 
	          	type="text"
	          	placeholder="Search by title or author"
	          	onChange={this.searchBooks} />
	        </div>
	      </div>
	      <div className="search-books-results">
	        <BookList
	        	books={matchingBooks}
	        	handleChangeOption={handleChangeOption}
	        />
	      </div>
	    </div>);
	}
}

SearchPage.propTypes = {
	handleChangeOption: PropTypes.func.isRequired
}

export default SearchPage;