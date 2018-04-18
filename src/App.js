import React, { Component } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import store from './store'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Login />
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
