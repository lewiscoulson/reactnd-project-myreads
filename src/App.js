import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './containers/SearchPage';
import BooksPage from './containers/BooksPage';

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
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
      return book.shelf === 'currentlyReading';
    });
  }

  getWantToReadBooks = () => {
    return this.state.books.filter((book) => {
      return book.shelf === 'wantToRead';
    });
  }

  getReadBooks = () => {
    return this.state.books.filter((book) => {
      return book.shelf === 'read';
    });
  }

  handleChangeOption = (event, id) => {
    let val = event.target.value;

    BooksAPI.update({id}, val).then((response) => {
      BooksAPI.getAll().then((response) => {
        this.setState({
          books: response
        });
      })
    });
  }

  render() {
    return (<div className="app">
      <Route exact path="/" render={() => (
        <BooksPage
          currentlyReadingBooks={this.getCurrentlyReadingBooks()}
          wantToReadBooks={this.getWantToReadBooks()}
          readBooks={this.getReadBooks()}
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