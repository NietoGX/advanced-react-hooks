// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.payload}
    case 'DECREMENT':
      return state - 1
    default:
      throw new Error('Unhandled action')
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = useReducer(countReducer, {count: initialCount})
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', payload: step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
