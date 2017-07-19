import React from 'react'
import { shallow } from 'enzyme';
import Book from '../../src/Components/Book'

it('Book', () => {
  shallow(<Book
  	title="test"
  	authors={['authors']}
  	image="url"
  	id="123"
  	onChangeOption={() => {}} />);
});