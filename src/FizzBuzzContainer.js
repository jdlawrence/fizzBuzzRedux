import React from 'react';
import { connect } from 'react-redux';

let FizzBuzzContainer = () => {
  return (
    <div>Hey dude!!! Your val is: { this.props.val}
      <div>
        <button onClick={ this.props.incremement }>Inc</button>
      </div>
    </div>
    );
}

FizzBuzzContainer = connect()(FizzBuzzContainer);

export default FizzBuzzContainer;

