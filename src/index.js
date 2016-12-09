import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import counter from './reducers';

// const store = createStore(counter);
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const render = () => {
  
  ReactDOM.render(
  <App value={store.getState().val}
       onIncrement={ () => {
         store.dispatch({ type: 'INCREMENT'});
       }}
  />,
  document.getElementById('root')
);
}; 

render();

store.subscribe(render);
