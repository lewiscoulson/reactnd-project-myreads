import React from 'react'
import { shallow } from 'enzyme';
import BookList from '../../src/Components/BookList'

it('BookList', () => {
  shallow(<BookList 
  	books={[]}
  	handleChangeOption={() => {}} />);
});