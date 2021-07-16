import {VALUE_ONE, VALUE_TWO, FOCUS} from "./actionTypes";
export function valueOne(payload) {
    return {
        type: VALUE_ONE,
        payload       
    }
}

export function valueTwo(payload) {
    return {
        type: VALUE_TWO,
        payload       
    }
}

export function focus(payload) {
    return {
        type: FOCUS,
        payload       
    }
}
