import React from 'react'
import { shallow } from 'enzyme';
import BooksPage from '../../src/Containers/BooksPage'

it('BooksPage', () => {
  shallow(<BooksPage
  	currentlyReadingBooks={[]}
  	wantToReadBooks={[]}
  	readBooks={[]}
  	handleChangeOption={() => {}} />);
});