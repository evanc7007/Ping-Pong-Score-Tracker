import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [server, setServer] = useState(true)

  return (
    <div>
      <h1>Who's Serving: </h1>
      <div className="card">
        <button onClick={() => {setCount1((count) => count + 1); setServer((server) => server = (count1 + count2 % 4 >= 2))}}>
          P2
        </button>
        <button onClick={() => {setCount2((count) => count + 1); setServer((server) => server = (count1 + count2 % 4 >= 2))}}>
          P2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>score is {count1} : {count2}</p>
    </div>
  )
}

export default App
