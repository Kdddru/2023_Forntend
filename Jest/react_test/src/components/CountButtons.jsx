import React from 'react'

export default function CountButtons({incrementFn, decrementFn}) {
  return (
    <div>
      <button onClick={incrementFn} data-testid = 'incrementbtn'
      >+</button>
      <button onClick={decrementFn} data-testid = 'decrementbtn'
      >-</button>
    </div>
  )
}
