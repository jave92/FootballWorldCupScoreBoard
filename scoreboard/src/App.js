import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import GameDetails from './components/GameDetails';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [showGameDetails, setShowGameDetails] = useState(false);

  const [games, setGames] = useState([]);

  const finishGame = (id) => {
    //I use setGames() with .filter so React can detect the change in the array and render it again
    setGames(game =>
      games.filter((game, index) => {
        return index !== id;
      }),
    );
  }

  const updateGame = (game) => {
    setGames(games.map((item) => item.id === game.id ? game : item));
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
          key = {item.id}
          /*I use anonymous function inside prop so I can pass an argument to it*/
          finishHandler = {() => finishGame(index)}
          updateHandler = {updateGame}
          id={item.id}
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
