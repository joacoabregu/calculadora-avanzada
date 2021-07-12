
function Display(props) {
    
    return (
        <>
            <input type="text" value={props.value}  />
            <button type="button">Clear</button>
        </>
    )
}

export default Display;