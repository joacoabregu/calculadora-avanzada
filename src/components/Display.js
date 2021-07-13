function Display(props) {  
    return (
        <>
            <input type="text" value={props.value} onChange={props.handleValue} />
            <button type="button">Clear</button>
        </>
    )
}

export default Display;