import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions'

let FizzBuzzContainer = ({ val, increment}) => {
  return (
    <div>Hey dude!!! Your val is: { val }
      <div>
        <button onClick={ increment }>Inc</button>
      </div>
    </div>
    );
}

const mapStateToProps = (state) => ({
  val: state.val
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch( increment());
  }
});


FizzBuzzContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FizzBuzzContainer);

export default FizzBuzzContainer;

