import {VALUE_ONE, VALUE_TWO, FOCUS} from "./actionTypes";

let initialState = {
    valueOne: 0,
    valueTwo: 0,
    focus: 1,
    add: 0,
    substract: 0,
    multiply: 0,
    divide: 0,
    pow: 0,
    sqrt1: 0,
    sqrt2: 0,
    hypot: 0
}

function calculations(valueOne, valueTwo){
    let add = parseFloat(valueOne) + parseFloat(valueTwo);
    let substract = parseFloat(valueOne) - parseFloat(valueTwo);
    let multiply = parseFloat(valueOne) * parseFloat(valueTwo); 
    let divide = parseFloat(valueOne) / parseFloat(valueTwo);
    let pow = Math.pow(parseFloat(valueOne),parseFloat(valueTwo));
    let sqrt1 = Math.sqrt(valueOne);
    let sqrt2 = Math.sqrt(valueTwo);
    let hypot = Math.hypot(parseFloat(valueOne), parseFloat(valueTwo)); 

    return {add, substract, multiply, divide, pow, sqrt1, sqrt2, hypot}
}


export default function calculadoraApp(state = initialState, action){
    let results;
    switch(action.type){
        case VALUE_ONE:
            results = calculations(action.payload, state.valueTwo);
            return {...state, valueOne: action.payload, ...results}
        case VALUE_TWO:
            results = calculations(state.valueOne, action.payload);
            return {...state, valueTwo: action.payload, ...results}
        case FOCUS:
            return {...state, focus: action.payload}

        default:
            return state;
    }
} 