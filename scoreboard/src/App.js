import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import GameDetails from './components/GameDetails';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

function App() {

  const [showGameDetails, setShowGameDetails] = useState(false);

  const [games, setGames] = useState([]);

  let navigate = useNavigate();

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
  
  let newArr;

  const summary = games => {
    newArr = games.sort(
      function(a,b){
        if ((Number(a.homescore) + Number(a.awayscore)) < (Number(b.homescore) + Number(b.awayscore))) { return 1; }
        if ((Number(a.homescore) + Number(a.awayscore)) > (Number(b.homescore) + Number(b.awayscore))) { return -1; }
        return 0;
      }
    )
    
    navigate("/summary", {state: {newArr}});
  }

  return (
    <div className="App">
      <div className='main-container'>
        <h1>Football World Cup Score Board</h1>
        <button onClick={() => setShowGameDetails(true)} className='btn-newgame'>Add new game</button>
        <button onClick={() => summary(games)} className='btn-summary'>Summary</button>
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
            showSetter={setShowGameDetails}
            isNewGame={true}
            newGame={addGame}
            onClose={() => setShowGameDetails(false)}

        />
        
      </div>
    </div>
  );
}

export default App;
