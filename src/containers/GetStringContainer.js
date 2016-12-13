import React from 'react'
import { connect } from 'react-redux'
import { changeString } from '../actions'

let GetStringContainer = ({dispatch}) => {
  let inputFizz, inputBuzz;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputFizz.value.trim() || !inputBuzz.value.trim()) {
          return;
        }
        dispatch(changeString({ fizz: inputFizz.value, buzz: inputBuzz.value }))
        inputFizz.value = '';
        inputBuzz.value = '';
      }}>
        <input ref={node => {
          inputFizz = node
        }} />
        <input ref={node => {
          inputBuzz = node
        }} />
        <button type="submit">
          Change Strings
        </button>
      </form>
    </div>
  )
};

GetStringContainer = connect()( GetStringContainer );

export default GetStringContainer;
