import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>Hey dude!!! Your val is: {this.props.value}
        <button onClick={this.props.onIncrement}>Inc</button>
      
      </div>
    );
  }
}

export default App;

