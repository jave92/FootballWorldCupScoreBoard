import './App.css';
import Game from './components/Game'
import NewGame from './components/NewGame';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Summary from './components/Summary';

function App() {

  const [showNewGame, setShowNewGame] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

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
        <button onClick={() => setShowNewGame(true)} className='btn-newgame'>Add new game</button>
        <button onClick={() => setShowSummary(true)} className='btn-summary'>Summary</button>
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
        
        <NewGame
            show={showNewGame}
            showSetter={setShowNewGame}
            newGame={addGame}
            onClose={() => setShowNewGame(false)}
            homename=''
            awayname=''
        />

        <Summary
          show={showSummary}
          showSetter={setShowSummary}
          onClose={() => setShowSummary(false)}
          games={games}
        />
        
      </div>
    </div>
  );
}

export default App;
