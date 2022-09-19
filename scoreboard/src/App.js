import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import { useState } from 'react';

function App() {

  const [games, setGames] = useState([
    {
      id: 1,
      homename: "España",
      homescore: 5,
      awayname: "Francia",
      awayscore: 0
    }
  ]);

  return (
    <div className="App">
      <div className='main-container'>
        <h1>Football World Cup Score Board</h1>
        {games.map( (item, index) => 
          <Game 
          homename={item.homename}
          homescore={item.homescore}
          awayname={item.awayname}
          awayscore={item.awayscore}/>
        )}
      </div>
    </div>
  );
}

export default App;
