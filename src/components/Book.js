import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  state = {
    shelf: ''
  }

  componentDidMount() {
    this.setState({
      shelf: this.props.shelf
    })
  }

  render() {
    const {title, authors, image, id, onChangeOption} = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={(event) => {onChangeOption(event, id) }}>
              <option value="">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  image: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Book;