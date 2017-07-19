import React from 'react'
import { shallow } from 'enzyme';
import BooksPage from '../../src/Containers/BooksPage'

it('BooksPage', () => {
  shallow(<BooksPage
  	getCurrentlyReadingBooks={() => []}
  	getWantToReadBooks={() => []}
  	getReadBooks={() => []}
  	handleChangeOption={() => {}} />);
});