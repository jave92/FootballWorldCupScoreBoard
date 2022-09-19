import logo from './logo.svg';
import './App.css';
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Football World Cup Score Board</h1>
        <Game 
          homename='España'
          homescore='5'
          awayname='Francia'
          awayscore='2'/>
          <Game 
          homename='Inglaterra'
          homescore='3'
          awayname='Dinamarca'
          awayscore='0'/>
          <Game 
          homename='Portugal'
          homescore='3'
          awayname='Italia'
          awayscore='3'/>
      </div>
    </div>
  );
}

export default App;
