import './App.css';
import Display from './components/Display';
import Calculations from './components/Calculations';
import NumberButtons from './components/NumberButtons';
import {connect} from 'react-redux';
import {valueOne, valueTwo} from './state/action';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {useEffect} from 'react'

function App(props) {

  useEffect(() => {
    if(isNaN(props.valueOne) || props.valueOne === '' ){
      props.dispatch(valueOne(0))
      alert('Ingresar número válido')
      return;
    }
    if(isNaN(props.valueTwo) || props.valueTwo === ''){
      props.dispatch(valueTwo(0))
      alert('Ingresar número válido')
      return;
    }
  });
  function handleValueOne(e){
    console.log(e.target.value);
    if(e.target.localName === 'button'){
      props.dispatch(valueOne(0))
    }else{
      props.dispatch(valueOne(e.target.value))
    }   
  }
  function handleValueTwo(e){
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

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora Avanzada</h1>
      </header>
      <DragDropContext onDragEnd={(result) => {
        const {source, destination} = result;
        if(!destination){
          return;
        }
        if(source.index === destination.index && source.droppableId === destination.droppableId){
          return;
        }

        results = reorder(results, source.index, destination.index);

      }} >
        <Display value={props.valueOne} title="Valor Uno" handleValue={handleValueOne} />
        <Display value={props.valueTwo} title="Valor Dos" handleValue={handleValueTwo}/>
        
        <NumberButtons />
        
        <Droppable droppableId="results" >
          {(droppableProvided) => (<div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className="container-results">
            <h1>Resultados:</h1>
            {results.map((result , index) => (
              <Draggable  key={index} draggableId={index.toString()} index={index} >
                {(draggableProvided) => (
                  <Calculations draggableProvided={draggableProvided} innerRef={draggableProvided.innerRef}  text={result.text} value={result.value} />
                )}
              </Draggable>
            )) }
            {droppableProvided.placeholder}
          </div>)}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      valueOne: state.valueOne,
      valueTwo: state.valueTwo,
      focus: state.focus,
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
