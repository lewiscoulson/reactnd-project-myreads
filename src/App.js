import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './containers/SearchPage';
import BooksPage from './containers/BooksPage';

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({
        books: response
      });
    })
  }

  getCurrentlyReadingBooks = () => {
    return this.state.books.filter((book) => {
      // TODO: check that shelf state is being returned from service
      return this.state.currentlyReading.indexOf(book.id) !== -1 || book.shelf === 'currentlyReading';
    });
  }

  getWantToReadBooks = () => {
    return this.state.books.filter((book) => {
      return this.state.wantToRead.indexOf(book.id) !== -1;
    });
  }

  getReadBooks = () => {
    return this.state.books.filter((book) => {
      return this.state.read.indexOf(book.id) !== -1;
    });
  }

  handleChangeOption = (event, bookID) => {
    let val = event.target.value;

    BooksAPI.update({bookID}, val);

    if (val === 'currentlyReading') {
      this.setState((state) => ({
        currentlyReading: state.currentlyReading.concat(bookID)
      }));
    } else if (val === 'wantToRead') {
      this.setState((state) => ({
        wantToRead: state.wantToRead.concat(bookID)
      }));
    } else if (val === 'read') {
      this.setState((state) => ({
        read: state.read.concat(bookID)
      }));
    } else if (val === 'none') {
      this.setState((state) => ({
        read: state.read.filter(id => bookID !== id),
        currentlyReading: state.currentlyReading.filter(id => bookID !== id),
        wantToRead: state.wantToRead.filter(id => bookID !== id)
      }));
    }
  }

  render() {
    return (<div className="app">
      <Route exact path="/" render={() => (
        <BooksPage
          getCurrentlyReadingBooks={this.getCurrentlyReadingBooks}
          getWantToReadBooks={this.getWantToReadBooks}
          getReadBooks={this.getReadBooks}
          handleChangeOption={this.handleChangeOption}
        />
      )} />
      <Route exact path="/search" render={() => (
        <SearchPage
          books={this.state.books}
          handleChangeOption={this.handleChangeOption}
        />
      )} />
    </div>);
  }
}

export default BooksApp