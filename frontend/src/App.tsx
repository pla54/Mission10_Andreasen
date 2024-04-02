import './App.css';
import BowlingLeagueList from './BowlingLeague/BowlingLeagueList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to the Bowling League App! This application displays the bowlers of the Marlins and Sharks teams along with their information." />
      <BowlingLeagueList />
    </div>
  );
}

export default App;
