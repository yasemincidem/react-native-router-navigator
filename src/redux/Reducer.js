import {PUSH_ROUTE_SUCCESS} from "./ActionTypes";
const InitialState = require("./InitialState").default;

const initialState = new InitialState();

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_ROUTE_SUCCESS: {
            const {payload}=action;
            let nextState = state.setIn(["routes"], payload);
            return nextState;
        }
        default: {
            return state;
        }
    }
};