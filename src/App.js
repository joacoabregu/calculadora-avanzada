import './App.css';
import Display from './components/Display';
import Calculations from './components/Calculations';
import {connect} from 'react-redux';
import {valueOne, valueTwo} from './state/action';

function App(props) {
  function handleValueOne(e){
    if(isNaN(e.target.value)){
      props.dispatch(valueOne(0))
      alert('Ingresar número válido')
      console.log(e)
      return;
    }
    if(e.target.localName === 'button'){
      props.dispatch(valueOne(0))
    }else{
      props.dispatch(valueOne(e.target.value))
    }   
  }
  function handleValueTwo(e){
    if(isNaN(e.target.value)){
      props.dispatch(valueTwo(0))
      alert('Ingresar número válido')
      return;
    }
    if(e.target.localName === 'button'){
      props.dispatch(valueTwo(0))
    }else{
      props.dispatch(valueTwo(e.target.value))
    }     
  }
  let results = [
    {text: 'Suma', value: props.add},
    {text: 'Resta', value: props.substract},
    {text: 'Multiplicación', value: props.multiply},
    {text: 'División', value: props.divide},
    {text: 'Potencia', value: props.pow},
    {text: 'Raíz Cuadrada Valor Uno', value: props.sqrt1},
    {text: 'Raíz Cuadrada Valor Dos', value: props.sqrt2},
    {text: 'Hipotenusa', value: props.hypot}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora Avanzada</h1>
      </header>
      <Display value={props.valueOne} title="Valor Uno" handleValue={handleValueOne}/>
      <Display value={props.valueTwo} title="Valor Dos" handleValue={handleValueTwo}/>
      <div className="container-results">
        {results.map((result , index) => <Calculations text={result.text} value={result.value}  key={index}/>) }
      </div>
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
      sqrt1: state.sqrt1,
      sqrt2: state.sqrt2,
      hypot: state.hypot,
  }
}

export default  connect(mapStateToProps)(App);
