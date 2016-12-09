import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>Hey dude!!! Your val is: {this.props.value}
        <div>
          <button onClick={this.props.onIncrement}>Inc</button>
        </div>
      </div>
    );
  }
}

export default App;

