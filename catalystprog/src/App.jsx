import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [server, setServer] = useState(1)
  const [winningPlayer, setWinning] = useState(1)
  const [endpoint, setEnd] = useState(false)

  function resetGame(){
    setCount1(() => 0);
    setCount2(() => 0);
    setServer(() => 1);
    setEnd(() => false)
  }
  
  return (
    <div>
      <h1>Ping Pong Simulator</h1>
      {!endpoint && <h2>Who's Serving: Player {server}</h2>}
      <div className="card">
        {!endpoint && <button onClick={() => {setCount1((count) => count + 1); setServer(() => (Math.floor((count1 + count2 + 1) / 2) % 2 + 1)); setWinning(() => 1); setEnd(() => (count1 + 1 >= 11))}}>
          P1 point
        </button>}
        {!endpoint && <button onClick={() => {setCount2((count) => count + 1); setServer(() => (Math.floor((count1 + count2 + 1) / 2) % 2 + 1)); setWinning(() => 2); setEnd(() => (count2 + 1 >= 11))}}>
          P2 point
        </button>}
        <button onClick={() => resetGame()}>
          Reset Game
          </button>
        {endpoint && <h1>Player {winningPlayer} wins!</h1>}
      </div>
      <p>score is {count1} : {count2}</p>
    </div>
  )
}

export default App
