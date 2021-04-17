import './App.css';
import Senddata from './Screens/Senddata'
import Success from './Screens/Success'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Senddata/>
          <br></br>
          <Success/>
      </header>
    </div>
  );
}

export default App;
