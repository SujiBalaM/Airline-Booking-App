import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find('p').text();
    expect(text).toEqual(0);
  });
});