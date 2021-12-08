import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Avatar from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar src='https://www.tedxace.com/img/team/2020/gauravkonde.jpeg' alt='profile' size={80} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
