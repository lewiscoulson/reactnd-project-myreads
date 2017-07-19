import React from 'react'
import { shallow } from 'enzyme';
import SearchPage from '../../src/Containers/SearchPage'

it('SearchPage', () => {
  shallow(<SearchPage
	  handleChangeOption={() => {}}
  />);
});