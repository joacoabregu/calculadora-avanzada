import './App.css';
import Display from './components/Display';
import Calculations from './components/Calculations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora Avanzada</h1>
      </header>
      <Display />
      <Display />
      <Calculations />
    </div>
  );
}

export default App;
