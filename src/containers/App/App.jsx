import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../redux/store/configureStore';

import Main from '../Main';

const store = configureStore();

class App extends Component {

  render () {
    return (
      <Provider store = { store }>
        <Main/>
      </Provider>
    );
  }
}

export default App;
