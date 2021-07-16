import {connect} from 'react-redux';
import {focus} from '../state/action';

function Display(props) { 
    function handleFocus(e){
        if(e.target.id === 'Valor Uno'){
            props.dispatch(focus(1))
        }else{
            props.dispatch(focus(2))
        }
      } 
    return (
        <div className="display">
            <h2>{props.title}</h2>
            <input type="text" id={props.title} value={props.value} onChange={props.handleValue} onFocus={handleFocus} />
            <button type="button" className="btn-clear" onClick={props.handleValue}>Clear</button>
        </div>
    )
}

export default connect()(Display);