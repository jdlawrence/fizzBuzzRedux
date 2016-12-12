import React from 'react';
import { connect } from 'react-redux';

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
    dispatch({ type: 'INCREMENT'});
  }
});


FizzBuzzContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FizzBuzzContainer);

export default FizzBuzzContainer;

