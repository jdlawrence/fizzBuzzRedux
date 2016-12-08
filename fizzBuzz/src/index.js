import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import './index.css';
import counter from './reducers';

console.log('counter: ', counter);
const store = createStore(counter)

const render = () => {
  
  ReactDOM.render(
  <App value={store.getState()}
       onIncrement={ () => {
        console.log('hey');
        store.dispatch({ type: 'INCREMENT'});
      }}
  />,
  document.getElementById('root')
);
} 

render();

store.subscribe(render)
