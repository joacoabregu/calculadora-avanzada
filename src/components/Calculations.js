function Calculations(props) {
    const { draggableProvided, innerRef } = props;
    return (
        <>
            <p className="results" {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps} ref={innerRef}>{props.text}: {props.value}</p>
        </>
    )
}

export default Calculations;