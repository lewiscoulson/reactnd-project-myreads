import React from 'react';
import PropTypes from 'prop-types';

const Book = ({title, authors, image, id, onChangeOption}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
        <div className="book-shelf-changer">
          <select onChange={(event) => {onChangeOption(event, id) }}>
            <option value="">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(',')}</div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Book;