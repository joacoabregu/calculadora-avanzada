import {VALUE_ONE, VALUE_TWO} from "./actionTypes";

let initialState = {
    valueOne: 0,
    valueTwo: 0,
    add: 0,
    substract: 0,
    multiply: 0,
    divide: 0,
    pow: 0,
    sqrt: 0,
    hypot: 0
}

function calculations(valueOne, valueTwo){
    let sum = valueOne + valueTwo;
    let substract = valueOne - valueTwo;
    let multiply = valueOne * valueTwo;
    let divide = valueOne / valueTwo;
    let pow = Math.pow(valueOne, valueTwo);
    //let sqrt = Math.sqrt
    let hypot = Math.hypot(valueOne, valueTwo); 

    return {sum, substract, multiply, divide, pow, hypot}
}


export default function calculadoraApp(state = initialState, action){
    let results;
    switch(action.type){
        case VALUE_ONE:
            results = calculations(action.payload, state.valueTwo);
            return {...state, valueOne: action.payload, ...results}
        case VALUE_TWO:
            results = calculations(state.valueOne, action.payload);
            return {...state, valueTwo: action.payload}

        default:
            return state;
    }
} 