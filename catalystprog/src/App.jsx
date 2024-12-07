import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [server, setServer] = useState(1);
  const [winningPlayer, setWinning] = useState(1);
  const [endpoint, setEnd] = useState(false);
  const [matches, setMatches] = useState([{ winner: "Winner", p1Score: "Player 1 Score", p2Score: "Player 2 Score" }]);
  const [showMatches, setShowMatches] = useState(false);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  function resetGame(){
    if(endpoint){
      let newMatches = [...matches];
      newMatches.push({ winner: "P" + winningPlayer, p1Score: count1, p2Score: count2 });
      setMatches(newMatches);
    }
	  if(winningPlayer == 1 && endpoint){
      setTotal1((total) => total + 1);
    } else if(endpoint){
      setTotal2((total) => total + 1);
    }
    setCount1(() => 0);
    setCount2(() => 0);
    setServer(() => 1);
    setEnd(() => false);
  }

  let matchesList = matches.map((match) => <li className="list-element">
    <span className="inner-list-element">{match.winner}</span>
    <span className="inner-list-element">{match.p1Score}</span>
    <span className="inner-list-element">{match.p2Score}</span>
  </li>)
  
  return (
    <div>
      <h1>Ping Pong Score Tracker</h1>
      <div className="decorative-div"></div>
      {!endpoint && <h2>Who's Serving: {server == 1 && <span className="playerName1">Player 1</span>}
                                       {server == 2 && <span className="playerName2">Player 2</span>}</h2>}
      <h2>Score is {count1} : {count2}</h2>
      <div className="card">
        {!endpoint && <button className="button" id="p1Button" onClick={() => {setCount1((count) => count + 1); setServer(() => (Math.floor((count1 + count2 + 1) / 2) % 2 + 1)); setWinning(() => 1); setEnd(() => ((count1 + 1 >= 11) && count1 > count2))}}>
          P1 point
        </button>}
        {!endpoint && <button className="button" id="p2Button" onClick={() => {setCount2((count) => count + 1); setServer(() => (Math.floor((count1 + count2 + 1) / 2) % 2 + 1)); setWinning(() => 2); setEnd(() => ((count2 + 1 >= 11) && count2 > count1))}}>
          P2 point
        </button>}
        {endpoint && <h1>Player {winningPlayer} wins!</h1>}
      </div>
      <button className="small-button" onClick={() => resetGame()}>
        Reset Game
      </button>
      {matches.length > 1 && <button className="small-button" onClick={() => setShowMatches((show) => !show)}>
        {showMatches && <span>Hide</span>} 
        {!showMatches && <span>Show</span>} Past Games
      </button>}
      {showMatches && <h3>Match Score is {total1}:{total2}</h3>}
      {showMatches && <div className="match-list">
        <ul>{matchesList}</ul>
      </div>}
    </div>
  )
}

export default App
