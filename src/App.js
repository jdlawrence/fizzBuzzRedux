import React, { Component } from 'react';
import FizzBuzzContainer from './containers/FizzBuzzContainer';
import GetStringContainer from './containers/GetStringContainer';
import DisplayStringContainer from './containers/DisplayStringContainer';

class App extends Component {
  render() {
    return (
      <div>
        <GetStringContainer/>
        <DisplayStringContainer/>
        <FizzBuzzContainer />
      </div>

    );
  }
}

export default App;

