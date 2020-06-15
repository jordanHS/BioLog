import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
    const { id } = action;
    switch (action.tye) {
    case c.DELETE_SPECIES:
        const newState = { ...state};
        delete newState[id];
        return newState;
    default:
        return state;
    }
};