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
        <div className="buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((v) => {
                return <button onClick={addValue} className="button">{v}</button>
            })}
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