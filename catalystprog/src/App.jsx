import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [server, setServer] = useState(1)

  return (
    <div>
      <h1>Who's Serving: Player {server}</h1>
      <div className="card">
        <button onClick={() => {setCount1((count) => count + 1); setServer(() => (Math.ceil((count1 + count2)/2) % 2 + 1))}}>
          P2
        </button>
        <button onClick={() => {setCount2((count) => count + 1); setServer(() => (Math.ceil((count1 + count2)/2) % 2 + 1))}}>
          P2
        </button>
      </div>
      <p>score is {count1} : {count2}</p>
    </div>
  )
}

export default App
