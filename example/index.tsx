import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../.';

const App = () => {
  return (
    <div>
      <Avatar 
        src='https://www.tedxace.com/img/team/2020/gauravkonde.jpeg'
        alt='profile'
        size={80}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
