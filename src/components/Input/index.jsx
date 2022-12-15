import React from 'react'

function Input({props}) {
  return (
    <input type='text' placeholder={props.placeholder} className={props.className}></input>
  )
}

export default Input