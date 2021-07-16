import {connect} from 'react-redux';
import {valueOne, valueTwo} from '../state/action';

function NumberButtons(props){
    function addValue(e){
        console.log(e.target.innerHTML);
          if(props.focus === 1){
            let value = props.valueOne.toString() + e.target.innerHTML;
            // Remove leading 0
            let valueTrim = value.replace(/^0+/, '')
            props.dispatch(valueOne(valueTrim))
          }
          if(props.focus === 2){
            let value = props.valueTwo.toString() + e.target.innerHTML;
            // Remove leading 0
            let valueTrim = value.replace(/^0+/, '')
            props.dispatch(valueTwo(valueTrim))
          }
      }
    return (
        <div>
            <button onClick={addValue}>1</button>
            <button onClick={addValue}>2</button>
            <button onClick={addValue}>3</button>
            <button onClick={addValue}>4</button>
            <button onClick={addValue}>5</button>
            <button onClick={addValue}>6</button>
            <button onClick={addValue}>7</button>
            <button onClick={addValue}>8</button>
            <button onClick={addValue}>9</button>
            <button onClick={addValue}>0</button>
            <button onClick={addValue}>.</button>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        valueOne: state.valueOne,
        valueTwo: state.valueTwo,
        focus: state.focus  
    }
  }

export default connect(mapStateToProps)(NumberButtons);