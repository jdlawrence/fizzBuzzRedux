// export default (state = 0, action) => {
//   if (action.type === 'INCREMENT') {
//     return state + 1;
//   }
//   else {
//     return state;
//   }
// };

export default (state = {
  counter: 0,
  val: 0
}, action) => {
  if (action.type === 'INCREMENT') {
    var temp = state.counter + 1;

    if ( temp % 3 === 0 && temp % 5 === 0) {
      return {counter: state.counter + 1, val: 'fizzBuzz'};
    }
    else if (temp % 3 === 0) {
      return {counter: state.counter + 1, val: 'fizz'};
    }
    else if (temp % 5 === 0) {
      return {counter: state.counter + 1, val: 'buzz'};
    }
    else {
      return {counter: state.counter + 1, val: state.counter + 1};
    }
  }
  else {
    return state;
  }
};