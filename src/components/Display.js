function Display(props) {  
    return (
        <div className="display">
            <h2>{props.title}</h2>
            <input type="text" value={props.value} onChange={props.handleValue} />
            <button type="button" className="btn-clear" onClick={props.handleValue}>Clear</button>
        </div>
    )
}

export default Display;