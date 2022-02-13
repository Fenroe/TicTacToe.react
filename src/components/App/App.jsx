import './App.css';
import { useState } from 'react';

function App() {
  // these states store the player's and computer's tile selection
  const [playerTiles, setPlayerTiles] = useState([]);

  const [computerTiles, setComputerTiles] = useState([]);
  // this array stores the winning tile combinations
  const winningTiles = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    <div className="App">
      <h1>Hello from App</h1>
    </div>
  );
}

export default App;
