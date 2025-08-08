import React, { useReducer } from 'react'

const UseReducer = () => {
  // 1️⃣ Initial state object
  const initialState = { count: 0 }

  // 2️⃣ Reducer function: decides how state changes based on action type
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        // Return a NEW state object with updated count (+1)
        return { count: state.count + 1 }
      case 'decrease':
        // Return a NEW state object with updated count (-1)
        return { count: state.count - 1 }
      case 'input':{
        return {count:action.payload}
      } 
      default:
        // If action type is unknown, return current state unchanged
        return state
    }
  }

  // 3️⃣ useReducer hook: gives us state + dispatch function
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {/* Display current count */}
      <h1>{state.count}</h1>

      {/* Increase button → dispatches an action with type 'increase' */}
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>

      {/* Decrease button → dispatches an action with type 'decrease' */}
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
      <br />
      <input 
      value={state.count}
      onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})}
      type="number" />
    </div>
  )
}

export default UseReducer
