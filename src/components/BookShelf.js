import React from 'react';
import PropTypes from 'prop-types';

const BookShelf = ({title, children}) => {
	return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {children}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
};

export default BookShelf;