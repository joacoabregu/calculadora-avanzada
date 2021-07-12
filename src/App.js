import './App.css';
import Display from './components/Display';
import Calculations from './components/Calculations';
import {connect} from 'react-redux';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora Avanzada</h1>
      </header>
      <Display value={props.valueOne}/>
      <Display value={props.valueTwo}/>
      <Calculations />
    </div>
  );
}

function mapStateToProps(state) {
  return {
      valueOne: state.valueOne,
      valueTwo: state.valueTwo,
      add: state.add,
      substract: state.substract,
      multiply: state.multiply,
      divide: state.divide,
      pow: state.pow,
      hypot: state.hypot,
  }
}

export default  connect(mapStateToProps)(App);
