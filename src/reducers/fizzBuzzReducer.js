export default (state = {
  counter: 0,
  val: 0,
  fizz: 'fizz',
  buzz: 'buzz'
}, action) => {
  if (action.type === 'INCREMENT') {
    var temp = state.counter + 1;

    if ( temp % 3 === 0 && temp % 5 === 0) {
      return {
        counter: state.counter + 1, 
        val: state.fizz + state.buzz, 
        fizz: state.fizz,
        buzz: state.buzz
      };
    }
    else if (temp % 3 === 0) {
      return {
        counter: state.counter + 1,
        val: state.fizz,
        fizz: state.fizz,
        buzz: state.buzz
      };
    }
    else if (temp % 5 === 0) {
      return {
        counter: state.counter + 1, 
        val: state.buzz,
        fizz: state.fizz,
        buzz: state.buzz
      };
    }
    else {
      return {
        counter: state.counter + 1,
        val: state.counter + 1,
        fizz: state.fizz,
        buzz: state.buzz
      };
    }
  }
  else if (action.type === 'CHANGE_STRING') {
    console.log('ACTIONS: ', action.fizz, action.buzz);
    return {
      counter: state.counter,
      val: state.val,
      fizz: action.fizz,
      buzz: action.buzz
    };
  }
  else {
    return state;
  }
};