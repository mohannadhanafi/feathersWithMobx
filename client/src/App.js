import React, { Component } from 'react';
import './App.css';
import Items from './components/items';
import store from './stores/itemStore';

class App extends Component {
  state = {}

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        {/* send the store with props to Items component */}
        <Items store={store} />
      </div>
    );
  }
}

export default App;
