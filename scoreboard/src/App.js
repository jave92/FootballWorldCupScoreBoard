import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import GameDetails from './components/GameDetails';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [showGameDetails, setShowGameDetails] = useState(false);

  const [games, setGames] = useState([
    {
      id:0,
      homename: "España",
      homescore: 5,
      awayname: "Francia",
      awayscore: 0
    },
    {
      id:1,
      homename: "Portugal",
      homescore: 2,
      awayname: "Italia",
      awayscore: 1
    },
    {
      id:2,
      homename: "Portugal",
      homescore: 2,
      awayname: "Italia",
      awayscore: 1
    },
  ]);

  const finishGame = (id) => {
    //I use setGames() with .filter so React can detect the change in the array and render it again
    setGames(game =>
      games.filter((game, index) => {
        return index !== id;
      }),
    );
  }

  const updateGame = (id) => {
  }

  const addGame = game => {
    game.id = uuidv4()
    setGames([...games, game]);
  }

  return (
    <div className="App">
      <div className='main-container'>
        <h1>Football World Cup Score Board</h1>
        <button onClick={() => setShowGameDetails(true)} className='btn-newgame'>Add new game</button>
        {games.map( (item, index) => 
          <Game 
          key = {index}
          /*I use anonymous function inside prop so I can pass an argument to it*/
          finishHandler = {() => finishGame(index)}
          updateHandler = {() => updateGame(index)}
          homename={item.homename}
          homescore={item.homescore}
          awayname={item.awayname}
          awayscore={item.awayscore}/>
        )}
        
        <GameDetails
            show={showGameDetails}
            isNewGame={true}
            newGame={addGame}
            onClose={() => setShowGameDetails(false)}

        />
        
      </div>
    </div>
  );
}

export default App;
