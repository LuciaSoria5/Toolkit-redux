import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter/';

function App() {
  
  const { counter } = useSelector( state => state.counter ); // toma el objeto counter
  const dispatch = useDispatch(); // sabe a que reducer va a llegar

  return (
    <>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
                    {/* El payload es 2 --> { payload: 2 } */}
        <button onClick={ () => dispatch( incrementBy(2) ) }>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
