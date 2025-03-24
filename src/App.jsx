import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 id='hello' className='underline italic'>Hello World</h1>
      <p className='text-red-500'>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(1000)}>Reset</button>
    </>
  )
}

export default App
